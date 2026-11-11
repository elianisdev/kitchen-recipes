import React from 'react';

import { useRecipeForm } from '../../../hooks/useRecipeForm.ts';
import { CloseIcon } from '../../atoms/Icons/CloseIcon';
import { RecipeForm } from '../RecipeForm/RecipeForm';
import type { Recipe } from '../../../types/recipe.ts';

interface RecipeAsideProps {
  isVisible: boolean;
  onClose: () => void;
  recipeId: string | null;
  recipes: Recipe[];
}

export const RecipeAside: React.FC<RecipeAsideProps> = ({ isVisible, onClose, recipeId, recipes }) => {
  const { mode, isSaving, error, initialData, title, handleSave, handleCancel } = useRecipeForm({
    recipeId,
    isVisible,
    onClose,
    recipes,
  });

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-full md:w-1/2 lg:w-1/4 bg-white shadow-xl transition-transform duration-300 z-50 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className='flex justify-between items-center p-6 border-b border-gray-200'>
        <h2 className='text-2xl font-semibold'>{title}</h2>
        <button
          onClick={onClose}
          className='text-gray-500 hover:text-gray-900 text-2xl p-1 leading-none transition-colors'
        >
          <CloseIcon size='lg' />
        </button>
      </div>

      {error && (
        <div className='mx-6 mt-4 p-3 bg-red-50 border border-red-200 rounded-md'>
          <p className='text-red-600 text-sm'>{error}</p>
        </div>
      )}

      <div className='flex flex-col h-full overflow-y-auto pb-20'>
        <RecipeForm
          key={recipeId || 'new'}
          initialData={initialData}
          mode={mode}
          onSave={handleSave}
          onCancel={handleCancel}
          isSaving={isSaving}
        />
      </div>
    </div>
  );
};
