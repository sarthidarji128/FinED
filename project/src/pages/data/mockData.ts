import type { Module, Challenge, UserProgress } from '../types';

export const userProgress: UserProgress = {
  level: 12,
  experience: 2450,
  points: 3200,
  streak: 7,
  nextLevelProgress: 75
};

export const modules: Module[] = [
  {
    id: 'budgeting',
    title: 'Smart Budgeting',
    description: 'Master the art of budgeting with practical exercises and real-world scenarios',
    icon: 'PiggyBank',
    progress: 65,
    totalLessons: 12,
    completedLessons: 8,
    estimatedTime: '2.5 hours'
  },
  {
    id: 'investing',
    title: 'Investment Basics',
    description: 'Learn how to grow your wealth through smart investment strategies',
    icon: 'TrendingUp',
    progress: 30,
    totalLessons: 15,
    completedLessons: 4,
    estimatedTime: '3 hours'
  },
  {
    id: 'taxes',
    title: 'Tax Essentials',
    description: 'Understand tax basics and maximize your returns with confidence',
    icon: 'Calculator',
    progress: 15,
    totalLessons: 10,
    completedLessons: 2,
    estimatedTime: '2 hours'
  },
  {
    id: 'financial-literacy',
    title: 'Financial Literacy',
    description: 'Build a strong foundation in personal finance management',
    icon: 'BookOpen',
    progress: 45,
    totalLessons: 8,
    completedLessons: 4,
    estimatedTime: '1.5 hours'
  }
];

export const challenges: Challenge[] = [
  {
    id: '1',
    title: 'Create Your First Budget',
    description: 'Set up a monthly budget tracking your income and expenses',
    points: 100,
    completed: false,
    category: 'easy',
    dueDate: '2 days left'
  },
  {
    id: '2',
    title: 'Emergency Fund Challenge',
    description: 'Start building your emergency fund with a specific goal',
    points: 150,
    completed: true,
    category: 'medium',
    dueDate: '5 days left'
  },
  {
    id: '3',
    title: 'Investment Simulation',
    description: 'Practice investing with a virtual portfolio of $10,000',
    points: 200,
    completed: false,
    category: 'hard',
    dueDate: '1 week left'
  },
  {
    id: '4',
    title: 'Tax Return Filing',
    description: 'Complete a simulated tax return filing process',
    points: 180,
    completed: false,
    category: 'medium',
    dueDate: '3 days left'
  }
];