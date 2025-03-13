import { create } from 'zustand';
import { TestProgress, Test, Question } from './types';
import { tests as initialTests } from './data/tests';

interface AppState {
  currentTestId: number | null;
  progress: TestProgress[];
  tests: Test[];
  setCurrentTest: (testId: number | null) => void;
  addAnswer: (testId: number, questionId: number, selectedAnswer: number, isCorrect: boolean) => void;
  completeTest: (testId: number, score: number) => void;
  addQuestion: (testId: number, question: Omit<Question, 'id'>) => void;
}

export const useStore = create<AppState>((set) => ({
  currentTestId: null,
  progress: [],
  tests: initialTests,
  setCurrentTest: (testId) => set({ currentTestId: testId }),
  addAnswer: (testId, questionId, selectedAnswer, isCorrect) =>
    set((state) => {
      const testProgress = state.progress.find((p) => p.testId === testId);
      if (!testProgress) {
        return {
          progress: [
            ...state.progress,
            {
              testId,
              answers: [{ questionId, selectedAnswer, isCorrect }],
              completed: false,
              score: 0,
            },
          ],
        };
      }

      const updatedProgress = state.progress.map((p) =>
        p.testId === testId
          ? {
              ...p,
              answers: [...p.answers.filter((a) => a.questionId !== questionId), { questionId, selectedAnswer, isCorrect }],
            }
          : p
      );

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
      const test = state.tests.find((t) => t.id === testId);
      if (!test) return state;

      const newId = Math.max(...test.questions.map((q) => q.id)) + 1;
      const updatedTests = state.tests.map((t) =>
        t.id === testId
          ? {
              ...t,
              questions: [...t.questions, { ...question, id: newId }],
            }
          : t
      );

      return { tests: updatedTests };
    }),
}));
