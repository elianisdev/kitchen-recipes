import React, { useState } from 'react';
interface TooltipProps {
  content: React.ReactNode;
  tip: string;
  position?: 'right' | 'left';
}
export const Tooltip: React.FC<TooltipProps> = ({ content, tip, position = 'left' }) => {
  const [show, setShow] = useState(false);
  const positionClass = position === 'left' ? 'right-full mr-3' : 'left-full ml-3';
  return (
    <div className='relative inline-block' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {content}
      {show && (
        <span
          className={`absolute p-1.5 text-xs text-white bg-gray-700 rounded-md whitespace-nowrap bottom-1/2 transform translate-y-1/2 z-50 ${positionClass}`}
        >
          {tip}
        </span>
      )}
    </div>
  );
};
