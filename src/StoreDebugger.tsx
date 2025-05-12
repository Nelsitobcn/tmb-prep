import React from 'react';
import { useStore } from './store';
import { tests as initialTests, infoGeneral } from './data/tests';

export const StoreDebugger: React.FC = () => {
  const { tests, currentTestId } = useStore();
  
  return (
    <div className="p-4 bg-white rounded shadow my-4">
      <h2 className="text-xl font-bold mb-4">Depurador del Store</h2>
      
      <div className="mb-4">
        <h3 className="font-semibold">Estado actual:</h3>
        <pre className="bg-gray-100 p-2 rounded">
          {JSON.stringify({ 
            currentTestId,
            testsCount: tests.length,
            testIds: tests.map(t => t.id)
          }, null, 2)}
        </pre>
      </div>
      
      <div className="mb-4">
        <h3 className="font-semibold">Tests iniciales:</h3>
        <pre className="bg-gray-100 p-2 rounded">
          {JSON.stringify({ 
            count: initialTests.length,
            ids: initialTests.map(t => t.id)
          }, null, 2)}
        </pre>
      </div>
      
      <div className="mb-4">
        <h3 className="font-semibold">Info General:</h3>
        <pre className="bg-gray-100 p-2 rounded">
          {JSON.stringify({ 
            count: infoGeneral.length,
            ids: infoGeneral.map(t => t.id)
          }, null, 2)}
        </pre>
      </div>
      
      <div className="mb-4">
        <h3 className="font-semibold">Comparación:</h3>
        <pre className="bg-gray-100 p-2 rounded">
          {JSON.stringify({ 
            storeTestsEqualInitialTests: JSON.stringify(tests) === JSON.stringify(initialTests),
            storeTestsLength: tests.length,
            initialTestsLength: initialTests.length
          }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default StoreDebugger;