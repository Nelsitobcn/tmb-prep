export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Test {
  id: number;
  title: string;
  description: string;
  questions: Question[];
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