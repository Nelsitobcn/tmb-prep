import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { tests as initialTests } from './data/tests';

// Verificación de carga de tests
console.log('Store: Cargando tests:', initialTests.length);

interface AppState {
  currentTestId: number | string | null;
  progress: any[];
  tests: any[];
  setCurrentTest: (testId: number | string | null) => void;
  addAnswer: (testId: number | string, questionId: number, selectedAnswer: number, isCorrect: boolean) => void;
  completeTest: (testId: number | string, score: number) => void;
  addQuestion: (testId: number | string, question: any) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      currentTestId: null,
      progress: [],
      tests: initialTests,

      setCurrentTest: (testId) => set({ currentTestId: testId }),

      addAnswer: (testId, questionId, selectedAnswer, isCorrect) =>
        set((state) => {
          const testProgress = state.progress.find((p) => p.testId === testId);
          let updatedProgress;

          if (testProgress) {
            updatedProgress = state.progress.map((p) =>
              p.testId === testId
                ? {
                    ...p,
                    answers: [
                      ...p.answers.filter((a) => a.questionId !== questionId),
                      { questionId, selectedAnswer, isCorrect },
                    ],
                  }
                : p
            );
          } else {
            updatedProgress = [
              ...state.progress,
              { testId, answers: [{ questionId, selectedAnswer, isCorrect }], completed: false, score: 0 },
            ];
          }

          return { progress: updatedProgress };
        }),

      completeTest: (testId, score) =>
        set((state) => ({
          progress: state.progress.map((p) =>
            p.testId === testId ? { ...p, completed: true, score } : p
          ),
        })),

      addQuestion: (testId, question) =>
        set((state) => {
          const testIndex = state.tests.findIndex((t) => String(t.id) === String(testId));
          if (testIndex === -1) return state;

          const test = state.tests[testIndex];
          const questions = test.questions ? [...test.questions] : [];

          const newId = questions.length ? Math.max(...questions.map((q) => q.id)) + 1 : 1;

          questions.push({ id: newId, ...question });

          const updatedTests = state.tests.map((t) =>
            t.id === testId ? { ...t, questions } : t
          );

          return { tests: updatedTests };
        }),
    }),
    {
      name: 'tmb-prep-store',
    }
  )
);
