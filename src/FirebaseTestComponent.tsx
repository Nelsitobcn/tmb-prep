import React, { useEffect, useState } from 'react';
import { auth } from './firebaseConfig';
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';

export const FirebaseTestComponent: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Prueba de Firebase</h2>
      
      {loading ? (
        <p>Cargando estado de autenticación...</p>
      ) : (
        <div>
          <h3 className="font-semibold">Estado de autenticación:</h3>
          <pre className="bg-gray-100 p-2 rounded mb-4">
            {user ? `Usuario autenticado: ${user.uid}` : 'No autenticado'}
          </pre>
          
          {!user && (
            <button 
              onClick={handleAnonymousSignIn}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
        <h3 className="font-semibold">Objeto auth:</h3>
        <pre className="bg-gray-100 p-2 rounded">
          {JSON.stringify(auth, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default FirebaseTestComponent;