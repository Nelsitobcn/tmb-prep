import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useStore } from '../store';
import { infoGeneral } from '../data/tests';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
    html: true,
    linkify: true,
});

interface TestWithQuestions {
    id: number | string;
    title: string;
    description: string;
    content: any;
    questions?: any[];
}

export const TestView: React.FC = () => {
    const { setCurrentTest, tests } = useStore();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [htmlContent, setHtmlContent] = useState<string>('');

    const testId = new URLSearchParams(window.location.search).get('testId');

    const currentTest: TestWithQuestions | undefined = testId
        ? [...tests, ...infoGeneral].find((t) => String(t.id) === testId)
        : undefined;

    useEffect(() => {
        if (testId) {
            setCurrentTest(testId);
        }
    }, [testId, setCurrentTest]);

    useEffect(() => {
        if (!currentTest || currentTest.questions) {
            setHtmlContent('');
            return;
        }

        const content = extractText(currentTest.content);
        setHtmlContent(md.render(content));
    }, [currentTest]);

    if (!currentTest) {
        return (
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
                <p>Test no encontrado. Por favor, selecciona un test de la lista.</p>
            </div>
        );
    }

    function extractText(obj: any): string {
        if (typeof obj === 'string') return obj;
        if (Array.isArray(obj)) return obj.map(extractText).join('');
        if (typeof obj === 'object' && obj !== null) {
            let result = '';
            if (obj.heading) result += `## ${obj.heading}\n\n`;
            if (obj.items) {
                result += obj.items.map((item: string) => item.trim().replace(/^-/g, '*')).join('\n');
            }
            Object.keys(obj).forEach((key) => {
                if (!['heading', 'items'].includes(key)) result += extractText(obj[key]);
            });
            return result;
        }
        return '';
    }

    const currentQuestion = currentTest.questions?.[currentQuestionIndex];

    const handleAnswerClick = (answerId: number) => {
        setSelectedAnswer(answerId);
        setShowExplanation(true);
    };

    const goToNextQuestion = () => {
        if (currentTest.questions && currentQuestionIndex < currentTest.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else {
            setCurrentTest(null);
            window.history.replaceState({}, document.title, '/');
        }
    };

    const goToPreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        }
    };

    return currentTest.questions ? (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
            <button
                onClick={() => {
                    window.history.replaceState({}, document.title, '/');
                    setCurrentTest(null);
                }}
                className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
            >
                <ArrowLeft className="w-5 h-5 mr-2" /> Volver a la lista
            </button>
            <h2 className="text-xl font-semibold mb-4">{currentTest.title}</h2>
            <p className="text-gray-600 mb-4">{currentTest.description}</p>
            {currentQuestion && (
                <>
                    <h3 className="text-lg font-medium mb-2">{currentQuestion.text}</h3>
                    <div className="space-y-2">
                        {currentQuestion.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerClick(index)}
                                className={`block w-full text-left p-2 rounded-md border-2 ${
                                    selectedAnswer === index
                                        ? currentQuestion.correctAnswer === index
                                            ? 'bg-green-100 border-green-500'
                                            : 'bg-red-100 border-red-500'
                                        : 'hover:bg-gray-100'
                                }`}
                                disabled={showExplanation}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    {showExplanation && (
                        <p className="mt-4 p-2 bg-gray-100 rounded-md">
                            {currentQuestion.explanation}
                        </p>
                    )}
                    <div className="flex justify-between mt-4">
                        <button onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0} className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50">
                            Anterior
                        </button>
                        <button onClick={goToNextQuestion} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                            {currentQuestionIndex === currentTest.questions.length - 1 ? 'Finalizar' : 'Siguiente'}
                        </button>
                    </div>
                </>
            )}
        </div>
    ) : (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
            <button
                onClick={() => {
                    window.history.replaceState({}, document.title, '/');
                    setCurrentTest(null);
                }}
                className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
            >
                <ArrowLeft className="w-5 h-5 mr-2" /> Volver a la lista
            </button>
            <h2 className="text-xl font-semibold mb-4">{currentTest.title}</h2>
            <p className="text-gray-600 mb-4">{currentTest.description}</p>
            <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
};

export default TestView;
