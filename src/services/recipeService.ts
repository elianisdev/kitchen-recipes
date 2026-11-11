import { addDoc, collection, doc, getDocs, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { Recipe, RecipeFormData } from '../types/recipe';

const RECIPES_COLLECTION = 'recipes';

export const createRecipe = async (recipeData: RecipeFormData): Promise<string> => {
  const docRef = await addDoc(collection(db, RECIPES_COLLECTION), {
    ...recipeData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
};

export const updateRecipe = async (recipeId: string, recipeData: RecipeFormData): Promise<void> => {
  const recipeRef = doc(db, RECIPES_COLLECTION, recipeId);
  await updateDoc(recipeRef, {
    ...recipeData,
    updatedAt: serverTimestamp(),
  });
};

export const getAllRecipes = async (): Promise<Recipe[]> => {
  const result = await getDocs(collection(db, RECIPES_COLLECTION));
  const recipes = result.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Recipe[];

  return recipes.sort((a, b) => {
    const aData = a as Recipe & { createdAt?: { toMillis: () => number } };
    const bData = b as Recipe & { createdAt?: { toMillis: () => number } };
    const aTime = aData.createdAt?.toMillis() || 0;
    const bTime = bData.createdAt?.toMillis() || 0;
    return bTime - aTime;
  });
};
