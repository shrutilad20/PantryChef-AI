
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { IngredientInput } from './components/IngredientInput';
import { RecipeList } from './components/RecipeList';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorDisplay } from './components/ErrorDisplay';
import { type Recipe } from './types';
import { generateRecipes } from './services/geminiService';

const App: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>(['Tomatoes', 'Onion', 'Garlic']);
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddIngredient = (ingredient: string) => {
    if (ingredient && !ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient]);
    }
  };

  const handleRemoveIngredient = (ingredientToRemove: string) => {
    setIngredients(ingredients.filter(ingredient => ingredient !== ingredientToRemove));
  };

  const handleGenerateRecipes = useCallback(async () => {
    if (ingredients.length === 0) {
      setError("Please add at least one ingredient.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setRecipes(null);

    try {
      const generated = await generateRecipes(ingredients);
      setRecipes(generated);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "An unknown error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [ingredients]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 dark:text-gray-200">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Transform Your Pantry into a Feast
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Enter the ingredients you have, and let our AI chef conjure up delicious recipes for you.
            </p>
        </div>

        <div className="max-w-2xl mx-auto mt-10 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg">
          <IngredientInput
            ingredients={ingredients}
            onAddIngredient={handleAddIngredient}
            onRemoveIngredient={handleRemoveIngredient}
          />
          <button
            onClick={handleGenerateRecipes}
            disabled={isLoading || ingredients.length === 0}
            className="w-full mt-6 flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 dark:disabled:text-gray-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isLoading ? 'Generating...' : 'Generate Recipes'}
          </button>
        </div>

        <div className="mt-12">
          {isLoading && <LoadingSpinner />}
          {error && <ErrorDisplay message={error} />}
          {recipes && recipes.length > 0 && <RecipeList recipes={recipes} />}
          {recipes && recipes.length === 0 && !isLoading && (
            <div className="text-center py-10">
              <h3 className="text-xl font-semibold">No Recipes Found</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Try adding more or different ingredients for better results.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
