// src/components/RegisterForm.tsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, AuthError, browserLocalPersistence, setPersistence } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null); // Limpiar errores previos
    setSuccessMessage(null); // Limpiar mensajes de éxito previos

    // Logs de diagnóstico mejorados
    console.log('Objeto auth en RegisterForm:', auth);
    console.log('Propiedades de auth:', Object.keys(auth));
    console.log('¿Firebase está inicializado?', auth.app ? 'Sí' : 'No');
    console.log('Auth config:', auth.config);
    
    // Establecer persistencia local (puede ayudar con algunos problemas de autenticación)
    try {
      await setPersistence(auth, browserLocalPersistence);
      console.log('Persistencia establecida correctamente');
    } catch (persistenceError) {
      console.error('Error al establecer persistencia:', persistenceError);
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    try {
      console.log('Intentando crear usuario con:', { email, password: '********' });
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Usuario registrado con éxito:', userCredential.user);
      setSuccessMessage('¡Usuario registrado con éxito! Ahora puedes iniciar sesión.');
      // Limpiar formulario
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      // Aquí podrías redirigir o cambiar el estado en App.tsx para mostrar el login
    } catch (error: any) {
      // Manejo de errores mejorado
      console.error('Error completo:', error);
      
      const firebaseError = error as AuthError;
      
      // Manejo de errores específicos de Firebase
      switch(firebaseError.code) {
        case 'auth/email-already-in-use':
          setError('Este correo electrónico ya está en uso.');
          break;
        case 'auth/invalid-email':
          setError('El formato del correo electrónico no es válido.');
          break;
        case 'auth/weak-password':
          setError('La contraseña es demasiado débil.');
          break;
        case 'auth/configuration-not-found':
          setError('Error de configuración de Firebase. Por favor, contacta al administrador.');
          console.error('Error de configuración de Firebase. Verifica que la aplicación esté correctamente registrada en la consola de Firebase y que los dominios estén autorizados.');
          break;
        case 'auth/network-request-failed':
          setError('Error de conexión. Verifica tu conexión a internet.');
          break;
        default:
          setError(`Error al registrar el usuario: ${firebaseError.message || 'Error desconocido'}`);
      }
      
      console.error('Error en el registro:', {
        code: firebaseError.code,
        message: firebaseError.message,
        name: firebaseError.name,
        stack: firebaseError.stack
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Crear una Cuenta</h2>
      {error && <p className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</p>}
      {successMessage && <p className="bg-green-100 text-green-700 p-3 rounded mb-4">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="tu@correo.com"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="********"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="********"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
}