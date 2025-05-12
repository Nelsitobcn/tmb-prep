// src/App.tsx
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebaseConfig';

// Tus imports existentes para la app principal
import { TestList } from './components/TestList';
import { TestView } from './components/TestView';
import { AddQuestionForm } from './components/AddQuestionForm'; // Asumo que este lo usas cuando estás logueado
import { useStore } from './store';
import { Train } from 'lucide-react';

// Importación del formulario de Registro
import { RegisterForm } from './components/RegisterForm';
// Importaremos LoginForm más adelante cuando lo necesitemos
// import { LoginForm } from './components/LoginForm';

function App() {
  const { currentTestId } = useStore();

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  // Podríamos añadir un estado para cambiar entre vista de Login y Registro
  // const [showLoginView, setShowLoginView] = useState(true); // true para Login, false para Registro

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoadingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  if (loadingAuth) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl">Cargando autenticación...</p>
      </div>
    );
  }

  if (currentUser) {
    // Si hay usuario, mostramos TU aplicación actual
    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-red-600 text-white py-6 mb-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Train className="w-8 h-8 mr-3" />
                <h1 className="text-2xl font-bold">Curso de Mando - CCOO</h1>
              </div>
              <div className="flex items-center">
                {/* Tu logo de CCOO con estilos inline */}
                <div style={{ width: '120px', height: '40px', backgroundColor: '#e30613', display: 'flex', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80%', height: '100%' }}>
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: '24px', letterSpacing: '2px' }}>CCOO</span>
                  </div>
                  <div style={{ width: '30%', height: '100%', backgroundColor: '#ffed00', position: 'absolute', right: 0 }}>
                    <div style={{ position: 'absolute', top: '10px', left: '0', width: '100%', height: '4px', backgroundColor: '#e30613' }}></div>
                    <div style={{ position: 'absolute', top: '20px', left: '0', width: '100%', height: '4px', backgroundColor: '#e30613' }}></div>
                    <div style={{ position: 'absolute', top: '30px', left: '0', width: '100%', height: '4px', backgroundColor: '#e30613' }}></div>
                  </div>
                </div>
                {/* Aquí puedes añadir tu botón de Logout si quieres */}
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 pb-12">
          <div className="mb-4">
            <p className="text-sm text-gray-700">Conectado como: {currentUser.email}</p>
            {/* Ejemplo de botón de Logout (necesitarás la función handleLogout como te mostré antes)
            <button
              onClick={handleLogout}
              className="ml-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-1 px-3 rounded text-xs"
            >
              Cerrar Sesión
            </button>
            */}
          </div>
          
          {/* Lógica para mostrar contenido principal */}
          {currentTestId ? (
            <TestView />
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Preparación para Mando TMB
                </h2>
                <p className="text-gray-600">
                  Este curso ha sido elaborado por el Departamento de Formación de CCOO del Área de Bus de TMB,
                  con el objetivo de facilitar tu preparación. Selecciona un test para comenzar.
                </p>
              </div>
              {/* Asumo que AddQuestionForm es para usuarios logueados */}
              {/* <AddQuestionForm />  Si este es el caso, quizás deba ir aquí o en otra vista */}
              <TestList /> 
            </>
          )}
        </main>
      </div>
    );
  } else {
    // Si no hay usuario, mostramos el formulario de registro
    // (o el de login, o un selector entre ambos)
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
        <header className="bg-red-600 text-white py-6 mb-8 w-full">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold">Curso de Mando - CCOO</h1>
          </div>
        </header>
        
        {/* Aquí decidimos si mostrar Login o Registro */}
        {/* Por ahora, mostramos directamente RegisterForm. 
            Si tuvieras un estado como 'showLoginView', sería:
            showLoginView ? <LoginForm /> : <RegisterForm />
        */}
        <RegisterForm />
        
        {/* Ejemplo de cómo podrías añadir un enlace para cambiar a Login:
        <div className="mt-6 text-center">
          <p>
            ¿Ya tienes una cuenta?{' '}
            <button 
              // onClick={() => setShowLoginView(true)} // Necesitarías el estado showLoginView
              className="font-medium text-red-600 hover:text-red-500"
            >
              Inicia sesión aquí (Próximamente)
            </button>
          </p>
        </div>
        */}
      </div>
    );
  }
}

export default App;