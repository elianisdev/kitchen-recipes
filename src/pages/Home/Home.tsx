import React from 'react';
import bgSidebarImage from '../../assets/bg-sidebar.jpg';
import logo from '../../assets/recipes-logo.svg';
import { FilterSelector } from '../../components/molecules/FilterSelector/FilterSelector';
import { SearchBar } from '../../components/molecules/SearchBar/SearchBar';
import { RecipeAddButton } from '../../components/organisms/RecipeAddButton/RecipeAddButton.tsx';
import { RecipeAside } from '../../components/organisms/RecipeAside/RecipeAside';
import { RecipeList } from '../../components/organisms/RecipeList/RecipeList';
import { useRecipeList } from '../../hooks/useRecipeList.ts';

import './styles.css';
import { ToastContainer } from 'react-toastify';

export const Home: React.FC = () => {
  const {
    recipes,
    loading,
    searchTerm,
    setSearchTerm,
    filterCooked,
    setFilterCooked,
    onCloseAside,
    asideVisible,
    handleSelectRecipe,
    currentRecipeId,
    handleNewRecipe,
  } = useRecipeList();

  return (
    <div className='flex flex-col w-full h-full'>
      <div className='flex w-full py-4 bg-white items-center justify-start pl-6 z-10 shadow-sm'>
        <div className='flex items-center'>
          <img src={logo} alt='Recipes Logo' />
        </div>
      </div>

      <div className='flex w-full h-full'>
        <div className='flex h-full'>
          <div
            className='w-80 h-full bg-cover bg-center'
            style={{
              backgroundImage: `url('${bgSidebarImage}')`,
              borderRadius: '0 0 100px 0',
            }}
          ></div>
        </div>

        <div className='flex w-full h-full'>
          <div className='flex flex-col p-8 w-full h-full'>
            <h1 className='title font-semibold mb-8'>Kitchen Recipes</h1>

            <div className='flex pb-8'>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <FilterSelector filter={filterCooked} setFilter={setFilterCooked} />
            </div>

            {loading && (
              <div className='flex justify-center items-center py-8'>
                <div className='text-gray-500'>Loading recipes...</div>
              </div>
            )}

            {!loading && <RecipeList recipes={recipes} onSelectRecipe={handleSelectRecipe} />}

            <RecipeAddButton handleNewRecipe={handleNewRecipe} />
          </div>
        </div>
      </div>

      <RecipeAside isVisible={asideVisible} onClose={onCloseAside} recipeId={currentRecipeId} recipes={recipes} />
      <ToastContainer />
    </div>
  );
};
