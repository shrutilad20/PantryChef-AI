
import React from 'react';
import { ChefHatIcon } from './icons/ChefHatIcon';

export const Header: React.FC = () => {
  return (
    <header className="bg-white/75 dark:bg-gray-800/75 backdrop-blur-lg sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3">
            <ChefHatIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              PantryChef AI
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
