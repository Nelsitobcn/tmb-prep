import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useStore } from '../store';
import { infoGeneral } from '../data/tests';

export const AddQuestionForm: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedTestId, setSelectedTestId] = useState<string | number>('');
  const [question, setQuestion] = useState({
    text: '',
    options: ['', '', '', ''],
    correctAnswer: 0,
    explanation: ''
  });

  const addQuestion = useStore((state) => state.addQuestion);
  const tests = useStore((state) => state.tests);
  const allTests = [...tests, ...infoGeneral];

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...question.options];
    newOptions[index] = value;
    setQuestion({ ...question, options: newOptions });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedTestId) {
      alert('Por favor selecciona un tema.');
      return;
    }

    addQuestion(selectedTestId, question);

    setQuestion({
      text: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      explanation: ''
    });

    setSelectedTestId('');
    setShowForm(false);
  };

  return (
    <div className="mb-8">
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Añadir Nueva Pregunta
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Añadir Nueva Pregunta</h3>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Seleccionar Tema
            </label>
            <select
              value={selectedTestId}
              onChange={(e) => setSelectedTestId(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Seleccionar Tema</option>
              {allTests.map((test) => (
                <option key={test.id} value={test.id}>
                  {test.title}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pregunta
            </label>
            <textarea
              value={question.text}
              onChange={(e) => setQuestion({ ...question, text: e.target.value })}
              className="w-full p-2 border rounded-md"
              rows={3}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Opciones
            </label>
            {question.options.map((option, index) => (
              <div key={index} className="mb-2 flex items-center">
                <input
                  type="radio"
                  name="correctAnswer"
                  checked={question.correctAnswer === index}
                  onChange={() => setQuestion({ ...question, correctAnswer: index })}
                  className="mr-2"
                />
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
            ))}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Explicación
            </label>
            <textarea
              value={question.explanation}
              onChange={(e) => setQuestion({ ...question, explanation: e.target.value })}
              className="w-full p-2 border rounded-md"
              rows={3}
              required
            />
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Guardar Pregunta
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddQuestionForm;
