import React from 'react';
import { ClipboardList, CheckCircle } from 'lucide-react';
import { useStore } from '../store';
import { infoGeneral } from '../data/tests'; // 🔹 Importar infoGeneral

export const TestList: React.FC = () => {
  const { progress, setCurrentTest, tests } = useStore();

  // 🔹 Fusionar tests con infoGeneral
  const allTests = [...tests, ...infoGeneral];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {allTests.map((test) => {
        const testProgress = progress.find((p) => p.testId === test.id);
        const completed = testProgress?.completed;
        const score = testProgress?.score || 0;

        return (
          <div
            key={test.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setCurrentTest(test.id)}
          >
            <div className="flex items-center justify-between mb-4">
              <ClipboardList className="w-6 h-6 text-blue-600" />
              {completed && <CheckCircle className="w-6 h-6 text-green-500" />}
            </div>
            <h3 className="text-xl font-semibold mb-2">{test.title}</h3>
            <p className="text-gray-600 mb-4">{test.description}</p>
            <div className="flex items-center justify-between text-sm">
              {/* 🔹 Manejo especial para infoGeneral (no tiene preguntas) */}
              {test.questions ? (
                <span className="text-gray-500">{test.questions.length} preguntas</span>
              ) : (
                <span className="text-gray-500">Información General</span>
              )}
              {completed && (
                <span className="text-green-600 font-semibold">
                  Puntuación: {score}%
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
