
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} PantryChef AI. Powered by Google Gemini.</p>
      </div>
    </footer>
  );
};
