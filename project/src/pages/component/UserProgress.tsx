import React from 'react';
import { Flame, Trophy, TrendingUp } from 'lucide-react';
import type { UserProgress as UserProgressType } from '../types';

interface UserProgressProps {
  progress: UserProgressType;
}

export function UserProgress({ progress }: UserProgressProps) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <TrendingUp className="w-8 h-8" />
          </div>
          <p className="text-2xl font-bold">{progress.level}</p>
          <p className="text-sm opacity-80">Current Level</p>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Trophy className="w-8 h-8" />
          </div>
          <p className="text-2xl font-bold">{progress.points}</p>
          <p className="text-sm opacity-80">Total Points</p>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Flame className="w-8 h-8" />
          </div>
          <p className="text-2xl font-bold">{progress.streak}</p>
          <p className="text-sm opacity-80">Day Streak</p>
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="mb-2">
            <div className="flex justify-between text-sm mb-1">
              <span>Level Progress</span>
              <span>{progress.nextLevelProgress}%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full">
              <div 
                className="h-2 bg-white rounded-full transition-all"
                style={{ width: `${progress.nextLevelProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}