
import React from 'react';

interface ErrorDisplayProps {
  message: string;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="max-w-2xl mx-auto bg-red-100 dark:bg-red-900/30 border-l-4 border-red-500 text-red-700 dark:text-red-300 p-4 rounded-md" role="alert">
      <p className="font-bold">Oops! Something went wrong.</p>
      <p>{message}</p>
    </div>
  );
};
