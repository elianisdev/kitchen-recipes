import React from 'react';

interface SwitchProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const SwitchIcon = ({ checked }: { checked: boolean }) => (
  <svg width='48' height='24' viewBox='0 0 48 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect width='48' height='24' rx='12' fill={checked ? '#8DC63F' : '#9CA3AF'} />
    <circle cx={checked ? '36' : '12'} cy='12' r='9' fill='white' />
  </svg>
);

export const Switch: React.FC<SwitchProps> = ({ checked, onChange, disabled }) => {
  return (
    <label className={`${disabled ? '' : 'cursor-pointer'} relative inline-flex items-center`}>
      <input type='checkbox' checked={checked} onChange={onChange} disabled={disabled} className='sr-only peer' />
      <div className='peer-focus:outline-none transition-all duration-300 ease-in-out'>
        <SwitchIcon checked={checked} />
      </div>
    </label>
  );
};
