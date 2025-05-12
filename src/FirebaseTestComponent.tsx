import React, { useEffect, useState } from 'react';
import { auth } from './firebaseConfig';
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { tests as initialTests, infoGeneral } from './data/tests';
import { useStore } from './store';

export const FirebaseTestComponent: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { tests: storeTests } = useStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAnonymousSignIn = async () => {
    try {
      setError(null);
      await signInAnonymously(auth);
    } catch (err: any) {
      console.error('Error al iniciar sesión anónimamente:', err);
      setError(err.message || 'Error al iniciar sesión');
    }
  };

  // Verificar si los tests están disponibles
  const testsAvailable = {
    initialTests: initialTests.length > 0,
    infoGeneral: infoGeneral.length > 0,
    storeTests: storeTests.length > 0
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Diagnóstico de Firebase y Tests</h2>
      
      {loading ? (
        <p>Cargando estado de autenticación...</p>
      ) : (
        <div>
          <h3 className="font-semibold">Estado de autenticación:</h3>
          <pre className="bg-gray-100 p-2 rounded mb-4">
            {user ? `Usuario autenticado: ${user.uid} (${user.isAnonymous ? 'anónimo' : 'registrado'})` : 'No autenticado'}
          </pre>
          
          {!user && (
            <button 
              onClick={handleAnonymousSignIn}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
              Iniciar sesión anónimamente
            </button>
          )}
          
          {error && (
            <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">
              Error: {error}
            </div>
          )}
        </div>
      )}
      
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Disponibilidad de Tests:</h3>
        <div className="bg-gray-100 p-2 rounded">
          <p className={testsAvailable.initialTests ? "text-green-600" : "text-red-600"}>
            Tests iniciales: {initialTests.length} tests {testsAvailable.initialTests ? "✅" : "❌"}
          </p>
          <p className={testsAvailable.infoGeneral ? "text-green-600" : "text-red-600"}>
            Info General: {infoGeneral.length} items {testsAvailable.infoGeneral ? "✅" : "❌"}
          </p>
          <p className={testsAvailable.storeTests ? "text-green-600" : "text-red-600"}>
            Tests en Store: {storeTests.length} tests {testsAvailable.storeTests ? "✅" : "❌"}
          </p>
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Detalles de Tests:</h3>
        <div className="bg-gray-100 p-2 rounded max-h-40 overflow-y-auto">
          <p className="font-medium">IDs de Tests iniciales:</p>
          <p className="text-sm">{initialTests.map(t => t.id).join(', ')}</p>
          
          <p className="font-medium mt-2">IDs de Info General:</p>
          <p className="text-sm">{infoGeneral.map(i => i.id).join(', ')}</p>
          
          <p className="font-medium mt-2">IDs de Tests en Store:</p>
          <p className="text-sm">{storeTests.map(t => t.id).join(', ')}</p>
        </div>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>Si ves "test no encontrado", verifica que:</p>
        <ol className="list-decimal pl-5">
          <li>Estás autenticado correctamente</li>
          <li>Los tests están disponibles en todas las fuentes</li>
          <li>El ID del test que intentas ver existe en alguna de las fuentes</li>
        </ol>
      </div>
    </div>
  );
};

export default FirebaseTestComponent;