import React from 'react';
import { Header } from './component/Header';
import { UserProgress } from './component/UserProgress';
import { ModuleCard } from './component/ModuleCard';
import { ChallengeList } from './component/ChallengeList';
import { modules, challenges, userProgress } from './data/mockData';

function Challenges() {
  const handleModuleClick = (id: string) => {
    console.log(`Module ${id} clicked`);
  };

  const handleChallengeComplete = (id: string) => {
    console.log(`Challenge ${id} completed`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* User Progress Section */}
        {userProgress && (
          <UserProgress progress={userProgress} />
        )}
        
        {/* Learning Path Section */}
        {modules && modules.length > 0 && (
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Learning Path
              </h2>
              <button 
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                aria-label="View all modules"
              >
                View All Modules
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map((module) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  onClick={handleModuleClick}
                />
              ))}
            </div>
          </section>
        )}

        {/* Active Challenges Section */}
        {challenges && challenges.length > 0 && (
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Active Challenges
              </h2>
              <button 
                className="px-4 py-2 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
                aria-label="Browse all challenges"
              >
                Browse All
              </button>
            </div>
            
            <ChallengeList
              challenges={challenges}
              onComplete={handleChallengeComplete}
            />
          </section>
        )}
      </main>
    </div>
  );
}

export default Challenges;
