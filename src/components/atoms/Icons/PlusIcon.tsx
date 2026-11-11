import React from 'react';
import plusIcon from '../../../assets/icons/plus-icon.svg';

interface PlusIconProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

export const PlusIcon: React.FC<PlusIconProps> = ({ size = 'md', className = '' }) => {
  return <img src={plusIcon} alt='Plus' className={`${sizeClasses[size]} ${className}`} />;
};
