export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  estimatedTime: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  completed: boolean;
  dueDate?: string;
  category: 'easy' | 'medium' | 'hard';
}

export interface UserProgress {
  level: number;
  experience: number;
  points: number;
  streak: number;
  nextLevelProgress: number;
}