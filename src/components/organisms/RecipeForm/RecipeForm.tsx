import React, { useCallback, useEffect, useState } from 'react';
import type { AsideMode, RecipeFormData } from '../../../types/recipe.ts';
import { Button } from '../../atoms/Button/Button';
import { PlusIcon } from '../../atoms/Icons/PlusIcon';
import { StarIcon } from '../../atoms/Icons/StarIcon';
import { TrashIcon } from '../../atoms/Icons/TrashIcon';
import { Switch } from '../../atoms/Switch/Switch';

interface RecipeFormProps {
  initialData: RecipeFormData;
  mode: AsideMode;
  onSave: (data: RecipeFormData) => void;
  onCancel: () => void;
  isSaving?: boolean;
}
export const RecipeForm: React.FC<RecipeFormProps> = ({ initialData, mode, onSave, onCancel, isSaving = false }) => {
  const [formData, setFormData] = useState<RecipeFormData>(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const isEditable = mode === 'NEW' || mode === 'EDIT';

  const isDataFilled = useCallback(() => {
    const baseFilled = formData.title.trim() !== '' && formData.preparation.trim() !== '' && formData.reviews > 0;

    const ingredientsFilled = formData.ingredients.length > 0 && formData.ingredients.every(i => i.name.trim() !== '');

    return baseFilled && ingredientsFilled;
  }, [formData]);

  const handleIngredientChange = (id: string, name: string) => {
    if (!isEditable) return;
    setFormData(prev => ({
      ...prev,
      ingredients: prev.ingredients.map(i => (i.id === id ? { ...i, name } : i)),
    }));
  };

  const addIngredient = () => {
    if (!isEditable) return;
    setFormData(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, { id: Date.now().toString(), name: '' }],
    }));
  };
  const removeIngredient = (id: string) => {
    if (!isEditable) return;
    setFormData(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter(i => i.id !== id),
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'DETAIL') {
      onCancel();
    } else if (isDataFilled()) {
      onSave(formData);
    }
  };

  const renderDetailView = () => (
    <div className='flex flex-col p-6'>
      <div className='flex flex-col'>
        <h4 className='font-semibold mb-3'>Ingredients</h4>
        <ul className='flex flex-col pb-6 list-disc list-inside'>
          {formData.ingredients.map(ingredient => (
            <li key={ingredient.id} className='items-start'>
              <span className='text-gray-700'>{ingredient.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex flex-col pb-6'>
        <h4 className='font-semibold mb-3'>Preparation</h4>
        <p className='text-gray-700 leading-relaxed whitespace-pre-wrap'>{formData.preparation}</p>
      </div>

      <div className='flex flex-col pb-6'>
        <h4 className='font-semibold mb-3'>Reviews</h4>
        <div className='flex items-center space-x-1'>
          {[1, 2, 3, 4, 5].map(star => (
            <StarIcon key={star} filled={star <= formData.reviews} size='md' />
          ))}
        </div>
      </div>

      <div className='flex flex-col items-start pt-4'>
        <span className='font-semibold pb-4'>Cooked before</span>
        <Switch
          checked={formData.cookedBefore}
          onChange={() => setFormData(prev => ({ ...prev, cookedBefore: !prev.cookedBefore }))}
          disabled={true}
        />
      </div>

      <div className='flex justify-end pt-8'>
        <Button type='button' variant='primary' onClick={onCancel}>
          Edit
        </Button>
      </div>
    </div>
  );

  const renderFormView = () => (
    <form onSubmit={handleSubmit} className='p-6'>
      <div className='pb-4'>
        <label className='block'>
          <span className='font-medium block mb-2'>Recipe name</span>
          <input
            id='recipe-name'
            name='recipe-name'
            type='text'
            value={formData.title}
            onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
            placeholder='E.g. Slow cooker beef and rice hot pot'
            className='block w-full border border-gray-300 rounded-md px-3 py-2'
          />
        </label>
      </div>

      <div className='pb-4'>
        <span className='font-medium block mb-2'>Ingredients</span>
        {formData.ingredients.map((ingredient, index) => (
          <div key={ingredient.id} className='flex items-center space-x-2 mb-2'>
            <span className='text-gray-500 text-sm w-6'>{index + 1}</span>
            <input
              type='text'
              value={ingredient.name}
              onChange={e => handleIngredientChange(ingredient.id, e.target.value)}
              placeholder='Type ingredient'
              className='flex-grow border border-gray-300 focus:ring-teal-500 focus:border-teal-500 rounded-md px-3 py-2'
            />
            <button
              type='button'
              onClick={() => removeIngredient(ingredient.id)}
              className='text-gray-500 hover:text-red-500 p-1 rounded-full transition-colors'
              title='Remove ingredient'
            >
              <TrashIcon size='md' />
            </button>
          </div>
        ))}

        <button
          type='button'
          onClick={addIngredient}
          className='text-teal-500 hover:text-teal-600 mt-2 transition-colors flex items-center space-x-2 cursor-pointer'
        >
          <PlusIcon size='md' />
          <span>Add ingredient</span>
        </button>
      </div>

      <div className='pb-4'>
        <label className='block'>
          <span className='font-medium block mb-2'>Preparation</span>
          <textarea
            value={formData.preparation}
            onChange={e => setFormData(prev => ({ ...prev, preparation: e.target.value }))}
            placeholder='Write the steps...'
            rows={5}
            className='block w-full border border-gray-300 focus:ring-teal-500 focus:border-teal-500 rounded-md px-3 py-2'
          />
        </label>
      </div>

      <div>
        <span className='font-medium block mb-3'>Reviews</span>
        <div className='flex space-x-4'>
          {[1, 2, 3, 4].map(calification => (
            <label key={calification} className='flex items-center cursor-pointer'>
              <input
                type='radio'
                name='reviews'
                value={calification}
                checked={formData.reviews === calification}
                onChange={() => setFormData(prev => ({ ...prev, reviews: calification }))}
                className='flex mr-2 h-6 w-6 cursor-pointer accent-teal-700'
              />
              <span className='text-sm'>{calification}</span>
            </label>
          ))}
        </div>
      </div>

      <div className='flex flex-col pt-4'>
        <span className='font-medium pb-4'>Cooked before</span>
        <Switch
          checked={formData.cookedBefore}
          onChange={() => setFormData(prev => ({ ...prev, cookedBefore: !prev.cookedBefore }))}
          disabled={false}
        />
      </div>

      <div className='flex justify-end space-x-4 pt-8 pb-12'>
        {mode === 'NEW' && (
          <Button
            type='submit'
            variant={isDataFilled() ? 'primary' : 'disabled'}
            disabled={!isDataFilled() || isSaving}
          >
            {isSaving ? 'Creating...' : 'Create'}
          </Button>
        )}

        {mode === 'EDIT' && (
          <>
            <Button type='button' variant='secondary' onClick={onCancel} disabled={isSaving}>
              Cancel
            </Button>
            <Button
              type='submit'
              variant={isDataFilled() ? 'primary' : 'disabled'}
              disabled={!isDataFilled() || isSaving}
            >
              {isSaving ? 'Updating...' : 'Update'}
            </Button>
          </>
        )}
      </div>
    </form>
  );

  return mode === 'DETAIL' ? renderDetailView() : renderFormView();
};
