import React from 'react';
import { tests as testsData, infoGeneral } from './data/tests';
import { Test, InfoGeneral } from './types';

// Asegurarnos de que los datos están disponibles
const tests: Test[] = testsData || [];
const infoItems: any[] = infoGeneral || [];

export const DirectTestList: React.FC = () => {
  console.log("DirectTestList - Tests disponibles:", tests.length);
  console.log("DirectTestList - Info general:", infoGeneral.length);
  
  // Función para manejar el clic en un test
  const handleTestClick = (testId: number | string) => {
    console.log("Test seleccionado:", testId);
    // No usamos el store, solo mostramos un mensaje
    alert(`Test seleccionado: ${testId}`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Lista de Tests (Directa)</h2>
      
      {tests.length === 0 ? (
        <div className="bg-yellow-100 p-4 rounded">
          <p className="text-yellow-700">No se encontraron tests en el archivo de datos.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Mostrar los tests */}
          {tests.map((test) => (
            <div key={test.id} className="border rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-white">
              <button
                onClick={() => handleTestClick(test.id)}
                className="text-left w-full p-4"
              >
                <h3 className="text-lg font-semibold">{test.title}</h3>
                <p className="text-gray-600">{test.description}</p>
                <p className="text-sm text-gray-400">
                  {test.questions ? `${test.questions.length} preguntas` : '📄 Información general'}
                </p>
              </button>
            </div>
          ))}
          
          {/* Mostrar la información general */}
          {infoItems.map((info) => (
            <div key={info.id} className="border rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-blue-50">
              <button
                onClick={() => handleTestClick(info.id)}
                className="text-left w-full p-4"
              >
                <h3 className="text-lg font-semibold">{info.title}</h3>
                <p className="text-gray-600">{info.description}</p>
                <p className="text-sm text-gray-400">📄 Información general</p>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DirectTestList;