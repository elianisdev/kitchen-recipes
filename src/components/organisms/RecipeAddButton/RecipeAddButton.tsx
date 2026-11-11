import React from 'react';
import { AddIcon } from '../../atoms/Icons/AddIcon.tsx';

interface RecipeAddButtonProps {
  handleNewRecipe: () => void;
}

export const RecipeAddButton: React.FC<RecipeAddButtonProps> = ({ handleNewRecipe }) => {
  return (
    <div className='flex absolute bottom-6 right-12 group'>
      <button
        onClick={handleNewRecipe}
        aria-label='Add recipe'
        className='flex bg-primary-color rounded-full p-4 transition-all duration-200 hover:scale-105 shadow-lg'
      >
        <AddIcon size={'xl'} />
      </button>
      <div className='flex absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap'>
        Add recipe
      </div>
    </div>
  );
};
