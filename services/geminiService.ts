
import { GoogleGenAI, Type } from "@google/genai";
import { type Recipe } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const recipeSchema = {
    type: Type.OBJECT,
    properties: {
        recipeName: {
            type: Type.STRING,
            description: "The name of the recipe."
        },
        description: {
            type: Type.STRING,
            description: "A short, enticing description of the dish."
        },
        prepTime: {
            type: Type.STRING,
            description: "Estimated preparation time (e.g., '15 minutes')."
        },
        cookTime: {
            type: Type.STRING,
            description: "Estimated cooking time (e.g., '30 minutes')."
        },
        ingredients: {
            type: Type.ARRAY,
            description: "A list of all ingredients required, with quantities.",
            items: { type: Type.STRING }
        },
        instructions: {
            type: Type.ARRAY,
            description: "Step-by-step cooking instructions.",
            items: { type: Type.STRING }
        }
    }
};

const responseSchema = {
    type: Type.ARRAY,
    description: "A list of 3 generated recipes.",
    items: recipeSchema
};


export async function generateRecipes(ingredients: string[]): Promise<Recipe[]> {
  if (ingredients.length === 0) {
    return [];
  }

  const prompt = `You are a world-class chef. Generate 3 diverse and delicious recipes using only the following ingredients: ${ingredients.join(', ')}. Do not suggest recipes that require ingredients not on this list.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });
    
    const responseText = response.text.trim();
    if (!responseText) {
        throw new Error("Received an empty response from the AI. Try different ingredients.");
    }
    
    const recipes = JSON.parse(responseText);
    return recipes as Recipe[];

  } catch (error) {
    console.error("Error generating recipes:", error);
    throw new Error("Failed to generate recipes. The AI might be busy or the ingredients are too restrictive. Please try again later.");
  }
}
