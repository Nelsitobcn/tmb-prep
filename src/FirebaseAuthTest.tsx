// src/FirebaseAuthTest.tsx
import React, { useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { auth } from './firebaseConfig';

export function FirebaseAuthTest() {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password123');
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authInitialized, setAuthInitialized] = useState(false);

  // Verificar el estado de autenticación al cargar
  useEffect(() => {
    console.log('Inicializando Firebase Auth Test');
    console.log('Auth:', auth);
    console.log('Auth app:', auth.app);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setAuthInitialized(true);
      console.log('Estado de autenticación cambiado:', user ? 'Usuario autenticado' : 'No hay usuario');
    });

    return () => unsubscribe();
  }, []);

  const handleRegister = async () => {
    try {
      setError('');
      setResult('');
      console.log('Intentando registrar usuario:', email);
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Usuario registrado exitosamente:', userCredential.user);
      setResult(`Registro exitoso: ${userCredential.user.uid}`);
    } catch (error: any) {
      console.error('Error al registrar:', error);
      setError(`Error de registro: ${error.code} - ${error.message}`);
    }
  };

  const handleLogin = async () => {
    try {
      setError('');
      setResult('');
      console.log('Intentando iniciar sesión:', email);
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Inicio de sesión exitoso:', userCredential.user);
      setResult(`Inicio de sesión exitoso: ${userCredential.user.uid}`);
    } catch (error: any) {
      console.error('Error al iniciar sesión:', error);
      setError(`Error de inicio de sesión: ${error.code} - ${error.message}`);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setResult('Sesión cerrada exitosamente');
    } catch (error: any) {
      setError(`Error al cerrar sesión: ${error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Prueba de Firebase Auth</h2>
      
      {!authInitialized ? (
        <p className="text-center">Inicializando autenticación...</p>
      ) : (
        <>
          <div className="mb-4 p-3 bg-gray-100 rounded">
            <p className="font-bold">Estado actual:</p>
            <p>{currentUser ? `Usuario conectado: ${currentUser.email}` : 'No hay usuario conectado'}</p>
          </div>
          
          {result && <p className="bg-green-100 text-green-700 p-3 rounded mb-4">{result}</p>}
          {error && <p className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</p>}
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          
          <div className="flex flex-col space-y-2">
            <button
              onClick={handleRegister}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Registrar Usuario
            </button>
            
            <button
              onClick={handleLogin}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Iniciar Sesión
            </button>
            
            {currentUser && (
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cerrar Sesión
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}