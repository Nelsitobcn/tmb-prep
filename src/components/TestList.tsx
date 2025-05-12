import React from 'react';
import { useStore } from '../store';
import { tests as initialTests, infoGeneral } from '../data/tests';

export const TestList: React.FC = () => {
  const { setCurrentTest } = useStore();

  // Mostrar los tests directamente desde el archivo de datos
  console.log("Tests disponibles:", initialTests.length);
  console.log("Info general:", infoGeneral.length);
  
  // Crear una copia local de los tests para mostrarlos
  const allTests = [...initialTests, ...infoGeneral];

  const handleTestClick = (testId: number | string) => {
    setCurrentTest(testId);
    window.history.pushState({}, '', `/?testId=${testId}`);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Lista de Tests</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allTests.map((test) => (
          <div key={test.id} className="border rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-white">
            <button
              onClick={() => handleTestClick(test.id)}
              className="text-left w-full p-4"
            >
              <h3 className="text-lg font-semibold">{test.title}</h3>
              <p className="text-gray-600">{test.description}</p>
              <p className="text-sm text-gray-400">
                {'questions' in test && test.questions ? `${test.questions.length} preguntas` : '📄 Información general'}
              </p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestList;
