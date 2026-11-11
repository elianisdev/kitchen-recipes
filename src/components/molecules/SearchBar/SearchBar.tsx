import React from 'react';
import { SearchIcon } from '../../atoms/Icons/SearchIcon';
import './styles.css';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='flex container-search-bar items-center'>
      <SearchIcon className='left-3' />
      <input
        id='search-bar'
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className='search-bar w-full pl-12 pr-4 py-3 border border-gray-100 rounded-md transition-all duration-200 text-base placeholder-black-500'
      />
    </div>
  );
};
