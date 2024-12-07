import React from 'react';
import { Moon, Sun, Trophy, User } from 'lucide-react';

export function Header() {


  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          FinED
        </h1>
    
        </div>
    </header>
  );
}