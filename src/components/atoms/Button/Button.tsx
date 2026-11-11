import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'disabled' | 'edit';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses =
    'px-8 py-3 rounded-full font-semibold transition-colors focus:outline-none disabled:cursor-not-allowed text-base';
  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses = 'bg-primary-color hover:bg-teal-600 text-white';
      break;
    case 'secondary':
      variantClasses = 'bg-white border border-teal-700 text-teal-700 hover:bg-gray-100';
      break;
    case 'edit':
      variantClasses = 'bg-primary-color hover:bg-teal-600 text-white';
      break;
    case 'disabled':
      variantClasses = 'bg-disabled-color text-white cursor-not-allowed';
      break;
    default:
      variantClasses = 'bg-gray-300 text-white';
      break;
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};
