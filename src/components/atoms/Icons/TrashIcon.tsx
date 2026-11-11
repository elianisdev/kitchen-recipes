import React from 'react';
import trashIcon from '../../../assets/icons/trash-icon.svg';

interface TrashIconProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

export const TrashIcon: React.FC<TrashIconProps> = ({ size = 'md', className = '' }) => {
  return <img src={trashIcon} alt='Trash' className={`${sizeClasses[size]} ${className}`} />;
};
