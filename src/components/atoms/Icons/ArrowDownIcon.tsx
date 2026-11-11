import React from 'react';
import arrowDownIcon from '../../../assets/icons/arrow-down-icon.svg';

interface ArrowDownIconProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

export const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({ size = 'md', className = '' }) => {
  return <img src={arrowDownIcon} alt='Arrow Down' className={`${sizeClasses[size]} ${className}`} />;
};
