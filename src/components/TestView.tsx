import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useStore } from '../store';
import { infoGeneral } from '../data/tests';
import MarkdownIt from 'markdown-it';

// Inicializar markdown-it con opciones
const md = new MarkdownIt({
  html: true,
  //breaks: true,   <-- Quita esto. No es necesario.
  linkify: true,
});

interface TestWithQuestions {
  id: number;
  title: string;
  description: string;
  content: any;
  questions: any[];
}

export const TestView: React.FC = () => {
  const { currentTestId, addAnswer, completeTest, setCurrentTest, tests } = useStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string>('');

  const currentTest = [...tests, ...infoGeneral].find((t) => t.id === currentTestId);

  if (!currentTest) return null;

  //Ya no necesitas la función extractText.
  // function extractText(obj: any): string {
  //   if (typeof obj === 'string') return obj;

  //   if (Array.isArray(obj)) {
  //     return obj.map(item => extractText(item)).filter(item => item !== '').join('\n');
  //   }

  //   if (typeof obj === 'object' && obj !== null) {
  //     if ('heading' in obj && 'items' in obj) {
  //       const heading = `## ${obj.heading}`;
  //       const items = Array.isArray(obj.items)
  //         ? obj.items.map((item: any) => `* ${extractText(item)}`).join('\n')
  //         : '';
  //       return `${heading}\n${items}`;
  //     }
  //     return Object.values(obj).map(value => extractText(value)).filter(value => value !== '').join('\n');
  //   }
  //   return '';
  // }

  useEffect(() => {
    const processMarkdown = (markdownText: string) => {
      try {
        const processedHtml = md.render(markdownText);
        if (typeof processedHtml !== 'string') throw new Error('markdown-it did not return a string');
        return processedHtml;
      } catch (error) {
        console.error('Error al procesar el Markdown con markdown-it:', error);
        return markdownText;
      }
    };

    // Accedemos directamente a currentTest.content, que ahora es un string
    const content = currentTest.content;
		const tempHtmlContent = processMarkdown(content);

    // Mantén estos console.log para verificar (opcional, puedes quitarlos después):
    console.log("Contenido original:", currentTest.content);
    console.log("Texto extraído:", content);
    console.log("HTML generado:", tempHtmlContent);

    setHtmlContent(tempHtmlContent);

  }, [currentTestId, currentTest?.content]);


  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => setCurrentTest(null)} className="flex items-center text-gray-600 hover:text-gray-800">
          <ArrowLeft className="w-5 h-5 mr-2" /> Volver a la lista
        </button>
      </div>
      <h2 className="text-xl font-semibold mb-4">{currentTest.title}</h2>
      <p className="text-gray-600 mb-4">{currentTest.description}</p>
      <div className="max-w-none text-gray-700 bg-white p-4 rounded-lg" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};