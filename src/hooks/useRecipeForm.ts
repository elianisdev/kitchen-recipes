import { useCallback, useEffect, useState } from 'react';
import { createRecipe as createRecipeService, updateRecipe as updateRecipeService } from '../services/recipeService';
import type { AsideMode, Recipe, RecipeFormData } from '../types/recipe.ts';
import { handleToastError, handleToastSuccess } from '../utils/toast-notification.ts';

const EMPTY_FORM: RecipeFormData = {
  title: '',
  ingredients: [{ id: Date.now().toString(), name: '' }],
  preparation: '',
  reviews: 0,
  cookedBefore: false,
};

interface UseRecipeFormProps {
  recipes: Recipe[];
  recipeId: string | null;
  isVisible: boolean;
  onClose: () => void;
}

export const useRecipeForm = ({ recipeId, isVisible, onClose, recipes }: UseRecipeFormProps) => {
  const [mode, setMode] = useState<AsideMode>(recipeId ? 'DETAIL' : 'NEW');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isVisible) {
      setMode(recipeId ? 'DETAIL' : 'NEW');
    }
  }, [recipeId, isVisible]);

  const currentRecipe = recipeId ? recipes.find(r => r.id === recipeId) : null;
  const initialData = currentRecipe ? { ...currentRecipe } : EMPTY_FORM;

  const handleSave = useCallback(
    async (data: RecipeFormData) => {
      try {
        setIsSaving(true);
        setError(null);
        if (mode === 'NEW') {
          await createRecipeService(data);
          handleToastSuccess('Recipe created successfully');
        } else if (mode === 'EDIT' && currentRecipe) {
          await updateRecipeService(currentRecipe.id, data);
          handleToastSuccess('Recipe updated successfully');
        }
      } catch (err) {
        const errorMessage = mode === 'NEW' ? 'Error creating recipe' : 'Error updating recipe';
        handleToastError(err, errorMessage);
        setError(errorMessage);
      } finally {
        onClose();
        setIsSaving(false);
      }
    },
    [mode, currentRecipe, onClose]
  );

  const handleCancel = useCallback(() => {
    if (mode === 'NEW') {
      onClose();
    } else if (mode === 'DETAIL') {
      setMode('EDIT');
    } else if (mode === 'EDIT') {
      setMode('DETAIL');
    }
  }, [mode, onClose]);

  const title = mode === 'NEW' ? 'New recipe' : initialData.title || 'Recipe Detail';

  return {
    mode,
    isSaving,
    error,
    initialData,
    title,
    handleSave,
    handleCancel,
  };
};
