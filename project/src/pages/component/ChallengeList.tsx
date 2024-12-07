import React from 'react';
import type { Challenge } from '../types';
import { CheckCircle, Circle, Clock, Award } from 'lucide-react';

interface ChallengeListProps {
  challenges: Challenge[];
  onComplete: (id: string) => void;
}

export function ChallengeList({ challenges, onComplete }: ChallengeListProps) {
  const getCategoryColor = (category: Challenge['category']) => {
    switch (category) {
      case 'easy':
        return 'text-green-500 bg-green-100 dark:bg-green-900 dark:text-green-300';
      case 'medium':
        return 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300';
      case 'hard':
        return 'text-red-500 bg-red-100 dark:bg-red-900 dark:text-red-300';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {challenges.map((challenge) => (
        <div 
          key={challenge.id}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-indigo-500 transition-all"
        >
          <div className="flex justify-between items-start mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(challenge.category)}`}>
              {challenge.category.charAt(0).toUpperCase() + challenge.category.slice(1)}
            </span>
            
            <button
              onClick={() => onComplete(challenge.id)}
              className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {challenge.completed ? (
                <CheckCircle className="w-6 h-6 text-green-500" />
              ) : (
                <Circle className="w-6 h-6" />
              )}
            </button>
          </div>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {challenge.title}
          </h4>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {challenge.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-indigo-600 dark:text-indigo-400">
                <Award className="w-5 h-5 mr-1" />
                <span className="font-medium">+{challenge.points} pts</span>
              </div>
              
              {challenge.dueDate && (
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{challenge.dueDate}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}