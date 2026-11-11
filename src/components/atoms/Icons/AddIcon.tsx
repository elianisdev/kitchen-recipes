import React from 'react';
import addIcon from '../../../assets/icons/add-icon.svg';

interface AddIconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
  xl: 'w-6 h-6',
};

export const AddIcon: React.FC<AddIconProps> = ({ size = 'md', className = '' }) => {
  return <img src={addIcon} alt='Add' className={`${sizeClasses[size]} ${className}`} />;
};
