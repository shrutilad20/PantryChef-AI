
import React from 'react';
import { type Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{recipe.recipeName}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{recipe.description}</p>

        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-300 mb-6 border-t border-b border-gray-200 dark:border-gray-700 py-3">
            <div className="flex flex-col items-center">
                <span className="font-semibold">Prep Time</span>
                <span>{recipe.prepTime}</span>
            </div>
            <div className="border-l border-gray-200 dark:border-gray-700"></div>
            <div className="flex flex-col items-center">
                <span className="font-semibold">Cook Time</span>
                <span>{recipe.cookTime}</span>
            </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Ingredients</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            {recipe.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Instructions</h4>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {recipe.instructions.map((instruction, i) => (
              <li key={i}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
