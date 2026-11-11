import React from 'react';
import starFilledIcon from '../../../assets/icons/rating-star-filled.svg';
import starIcon from '../../../assets/icons/rating-star.svg';

interface StarIconProps {
  filled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

export const StarIcon: React.FC<StarIconProps> = ({ filled = false, size = 'md', className = '' }) => {
  return (
    <img
      src={filled ? starFilledIcon : starIcon}
      alt={filled ? 'Star filled' : 'Star'}
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};
