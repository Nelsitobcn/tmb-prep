export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Test {
  id: number | string;
  title: string;
  description: string;
  questions: Question[];
}

// Interfaz para la información general que no tiene preguntas
export interface InfoGeneral {
  id: string;
  title: string;
  description: string;
  content: string;
}

export interface UserAnswer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

export interface TestProgress {
  testId: number;
  answers: UserAnswer[];
  completed: boolean;
  score: number;
}