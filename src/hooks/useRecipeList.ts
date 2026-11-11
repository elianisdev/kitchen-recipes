import { useCallback, useEffect, useMemo, useState } from 'react';
import { getAllRecipes } from '../services/recipeService';
import type { FilterCooked, Recipe } from '../types/recipe.ts';
import { handleToastError } from '../utils/toast-notification.ts';

export const useRecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCooked, setFilterCooked] = useState<FilterCooked>('all');
  const [asideVisible, setAsideVisible] = useState(false);
  const [currentRecipeId, setCurrentRecipeId] = useState<string | null>(null);

  const handleSelectRecipe = (id: string) => {
    setCurrentRecipeId(id);
    setAsideVisible(true);
  };

  const handleNewRecipe = () => {
    setCurrentRecipeId(null);
    setAsideVisible(true);
  };

  const getRecipes = useCallback(async () => {
    setLoading(true);
    try {
      setRecipes(await getAllRecipes());
    } catch (err) {
      handleToastError(err, 'Error fetching recipes');
    }
    setLoading(false);
  }, []);

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());

      let matchesFilter = true;
      if (filterCooked === 'true') {
        matchesFilter = recipe.cookedBefore;
      } else if (filterCooked === 'false') {
        matchesFilter = !recipe.cookedBefore;
      }

      return matchesSearch && matchesFilter;
    });
  }, [recipes, searchTerm, filterCooked]);

  const onCloseAside = () => {
    setAsideVisible(false);
    getRecipes();
  };

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    recipes: filteredRecipes,
    loading,
    searchTerm,
    setSearchTerm,
    filterCooked,
    setFilterCooked,
    onCloseAside,
    handleSelectRecipe,
    handleNewRecipe,
    asideVisible,
    currentRecipeId,
  };
};
