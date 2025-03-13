import React from 'react';
import { TestList } from './components/TestList';
import { TestView } from './components/TestView';
import { AddQuestionForm } from './components/AddQuestionForm';
import { useStore } from './store';
import { Train } from 'lucide-react';

function App() {
  const { currentTestId } = useStore();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-6 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Train className="w-8 h-8 mr-3" />
              <h1 className="text-2xl font-bold">TMB Curso de Mando</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-12">
        {currentTestId ? (
          <TestView />
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Preparación para Mando TMB
              </h2>
              <p className="text-gray-600">
                Selecciona un test para comenzar tu preparación. Cada test incluye preguntas
                específicas con explicaciones detalladas.
              </p>
            </div>
            <AddQuestionForm />
            <TestList />
          </>
        )}
      </main>
    </div>
  );
}

export default App;