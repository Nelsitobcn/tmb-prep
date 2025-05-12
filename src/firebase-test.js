// Archivo de prueba simple para verificar la configuración de Firebase
import { signInAnonymously } from 'firebase/auth';
import firebaseApp, { auth } from './firebaseConfig';

// Mostrar información de la instancia de Firebase
console.log('Usando instancia de Firebase existente');
console.log('Firebase app:', firebaseApp);
console.log('Auth:', auth);

// Intentar autenticación anónima (más simple que email/password)
console.log('Intentando autenticación anónima...');
signInAnonymously(auth)
  .then((userCredential) => {
    console.log('Autenticación anónima exitosa:', userCredential.user);
  })
  .catch((error) => {
    console.error('Error de autenticación anónima:', error.code, error.message);
  });

// Exportar para uso en otros archivos
export { app, auth };