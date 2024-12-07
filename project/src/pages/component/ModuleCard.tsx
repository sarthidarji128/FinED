import React from 'react';
import type { Module } from '../types';
import { ArrowRight, Clock } from 'lucide-react';

interface ModuleCardProps {
  module: Module;
  onClick: (id: string) => void;
}

export function ModuleCard({ module, onClick }: ModuleCardProps) {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
      onClick={() => onClick(module.id)}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
            {module.completedLessons} / {module.totalLessons} Lessons
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {module.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {module.description}
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Clock className="w-4 h-4 mr-2" />
            {module.estimatedTime}
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">Progress</span>
              <span className="text-indigo-600 dark:text-indigo-400">{module.progress}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all"
                style={{ width: `${module.progress}%` }}
              />
            </div>
          </div>
          
          <div className="flex justify-end">
            <ArrowRight className="text-indigo-600 dark:text-indigo-400" />
          </div>
        </div>
      </div>
    </div>
  );
}