import React from 'react';
import closeIcon from '../../../assets/icons/close-icon.svg';

interface CloseIconProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

export const CloseIcon: React.FC<CloseIconProps> = ({ size = 'md', className = '' }) => {
  return <img src={closeIcon} alt='Close' className={`${sizeClasses[size]} ${className}`} />;
};
