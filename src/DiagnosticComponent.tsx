import React from 'react';
import { useStore } from './store';
import { tests as initialTests, infoGeneral } from './data/tests';

export const DiagnosticComponent: React.FC = () => {
  const { tests } = useStore();
  
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Diagnóstico de Datos</h2>
      
      <div className="mb-4">
        <h3 className="font-semibold">Tests en Store:</h3>
        <pre className="bg-gray-100 p-2 rounded">
          {JSON.stringify({ length: tests.length, ids: tests.map(t => t.id) }, null, 2)}
        </pre>
      </div>
      
      <div className="mb-4">
        <h3 className="font-semibold">Tests Iniciales:</h3>
        <pre className="bg-gray-100 p-2 rounded">
          {JSON.stringify({ length: initialTests.length, ids: initialTests.map(t => t.id) }, null, 2)}
        </pre>
      </div>
      
      <div className="mb-4">
        <h3 className="font-semibold">Info General:</h3>
        <pre className="bg-gray-100 p-2 rounded">
          {JSON.stringify({ length: infoGeneral.length, ids: infoGeneral.map(t => t.id) }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default DiagnosticComponent;