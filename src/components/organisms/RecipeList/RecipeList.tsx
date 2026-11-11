import React from 'react';
import type { Recipe } from '../../../types/recipe.ts';
import { StarIcon } from '../../atoms/Icons/StarIcon';
import { Switch } from '../../atoms/Switch/Switch';

interface RecipeListProps {
  recipes: Recipe[];
  onSelectRecipe: (id: string) => void;
}

export const RecipeList: React.FC<RecipeListProps> = ({ recipes, onSelectRecipe }) => {
  const renderStars = (reviews: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<StarIcon key={i} filled={i <= reviews} />);
    }
    return stars;
  };

  return (
    <div className='w-full'>
      <div className='flex flex-col rounded-lg overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-white border-b border-gray-400'>
              <tr>
                <th scope='col' className='px-4 py-3 text-left text-xs font-medium text-gray-500 flex-1 w-1/2'>
                  Recipe name
                </th>
                <th scope='col' className='px-4 py-3 text-left text-xs font-medium text-gray-500 w-1/4 '>
                  Reviews
                </th>
                <th scope='col' className='px-4 py-3 text-left text-xs font-medium text-gray-500 w-1/4'>
                  Cooked before
                </th>
              </tr>
            </thead>
            <tbody>
              {recipes.map(recipe => (
                <tr
                  key={recipe.id}
                  className='cursor-pointer hover:bg-gray-100 transition-colors border-b border-gray-200'
                  onClick={() => onSelectRecipe(recipe.id)}
                >
                  <td className='px-4 py-2 whitespace-nowrap text-sm text-gray-900'>{recipe.title}</td>
                  <td className='px-4 py-2 whitespace-nowrap text-sm text-gray-500'>
                    <div className='flex justify-start space-x-0.5'>{renderStars(recipe.reviews)}</div>
                  </td>
                  <td className='px-4 py-2 whitespace-nowrap text-sm text-gray-500'>
                    <div className='flex justify-start' onClick={e => e.stopPropagation()}>
                      <Switch checked={recipe.cookedBefore} disabled onChange={() => {}} />
                    </div>
                  </td>
                </tr>
              ))}

              {recipes.length === 0 && (
                <tr>
                  <td colSpan={3} className='px-6 py-4 text-center text-sm text-gray-500'>
                    No recipes found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
