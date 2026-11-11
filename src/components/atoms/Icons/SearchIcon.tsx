import React from 'react';
import searchIcon from '../../../assets/icons/search-icon.svg';

interface SearchIconProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

export const SearchIcon: React.FC<SearchIconProps> = ({ size = 'md', className = '' }) => {
  return <img src={searchIcon} alt='Search' className={`${sizeClasses[size]} ${className}`} />;
};
