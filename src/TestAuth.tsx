// src/TestAuth.tsx
import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, browserLocalPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

export function TestAuth() {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password123');
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Verificar el estado de Firebase al cargar el componente
  useEffect(() => {
    console.log('TestAuth - Verificando estado de Firebase:');
    console.log('Auth:', auth);
    console.log('Auth config:', auth.config);
    console.log('Auth app:', auth.app);
    
    // Verificar si hay algún usuario ya autenticado
    if (auth.currentUser) {
      console.log('Usuario ya autenticado:', auth.currentUser);
    } else {
      console.log('No hay usuario autenticado');
    }
  }, []);

  const testAuth = async () => {
    try {
      // Mostrar información de depuración
      console.log('Iniciando prueba de autenticación');
      console.log('Objeto auth:', auth);
      console.log('Propiedades de auth:', Object.keys(auth));
      console.log('Firebase app:', auth.app);
      
      // Establecer persistencia local
      try {
        await setPersistence(auth, browserLocalPersistence);
        console.log('Persistencia establecida correctamente');
      } catch (persistenceError) {
        console.error('Error al establecer persistencia:', persistenceError);
      }
      
      // Intentar iniciar sesión primero (por si el usuario ya existe)
      try {
        console.log('Intentando iniciar sesión primero...');
        const signInResult = await signInWithEmailAndPassword(auth, email, password);
        console.log('Inicio de sesión exitoso:', signInResult.user);
        setResult(`Inicio de sesión exitoso: ${signInResult.user.uid}`);
        return;
      } catch (signInError: any) {
        console.log('Error al iniciar sesión (esperado si el usuario no existe):', signInError.code);
        // Continuamos con la creación del usuario
      }
      
      // Intentar crear un usuario
      console.log('Intentando crear usuario con:', { email, password: '********' });
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Usuario creado exitosamente:', userCredential.user);
      setResult(`Usuario creado exitosamente: ${userCredential.user.uid}`);
    } catch (error: any) {
      console.error('Error completo:', error);
      setError(`Error: ${error.code} - ${error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Prueba de Autenticación</h2>
      
      {result && <p className="bg-green-100 text-green-700 p-3 rounded mb-4">{result}</p>}
      {error && <p className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</p>}
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Correo Electrónico de Prueba
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Contraseña de Prueba
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      
      <button
        onClick={testAuth}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >
        Probar Autenticación
      </button>
    </div>
  );
}