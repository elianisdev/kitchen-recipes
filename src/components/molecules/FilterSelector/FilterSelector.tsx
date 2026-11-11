import React, { useState } from 'react';
import type { FilterCooked } from '../../../types/recipe';
import { ArrowDownIcon } from '../../atoms/Icons/ArrowDownIcon';
import './styles.css';

interface FilterSelectorProps {
  filter: FilterCooked;
  setFilter: (filter: FilterCooked) => void;
}

const options = [
  { value: 'all' as FilterCooked, label: 'All' },
  { value: 'true' as FilterCooked, label: 'Active' },
  { value: 'false' as FilterCooked, label: 'Inactive' },
];

export const FilterSelector: React.FC<FilterSelectorProps> = ({ filter, setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentLabel = options.find(o => o.value === filter)?.label || 'All';

  const handleSelect = (value: FilterCooked) => {
    setFilter(value);
    setIsOpen(false);
  };

  return (
    <div className='relative w-64 z-20'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex button-filter items-center justify-center px-3 py-3 text-sm text-gray-700 cursor-pointer'
      >
        <span>
          Cooked before: <span className='font-medium ml-1'>{currentLabel}</span>
        </span>
        <ArrowDownIcon className='ml-2' />
      </button>

      {isOpen && (
        <div className='card-filters absolute left-0 w-48 bg-white border border-gray-200 z-10 p-2 text-sm'>
          {options.map(option => (
            <div
              key={option.value}
              className='flex items-center justify-between p-2 cursor-pointer hover:bg-gray-50 rounded'
              onClick={() => handleSelect(option.value)}
            >
              <span>{option.label}</span>
              <div
                className={`w-6 h-6 rounded-full border-1 flex items-center justify-center ${filter === option.value ? 'border-teal-700 bg-gray-100' : 'border-gray-400'}`}
              >
                {filter === option.value && <div className='w-3 h-3 bg-teal-700 rounded-full'></div>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
