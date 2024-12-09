/**This component has been done with AI, don't freak out */
import React, { useState, useRef, ReactNode } from 'react';

interface TooltipProps {
  content: ReactNode; // Content or custom component to display
  position?: 'top' | 'right' | 'bottom' | 'left'; // Tooltip position
  arrow?: boolean; // Display arrow or not
  delay?: number; // Delay before showing the tooltip (in ms)
  children: ReactNode; // Target element
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'top',
  arrow = true,
  delay = 0,
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    timerRef.current = setTimeout(() => setVisible(true), delay);
  };

  const hideTooltip = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  };

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
  };

  const arrowStyles = {
    top: 'border-t-[var(--tooltip-arrow-size)] border-t-[var(--tooltip-background-color)]',
    right: 'border-r-[var(--tooltip-arrow-size)] border-r-[var(--tooltip-background-color)]',
    bottom: 'border-b-[var(--tooltip-arrow-size)] border-b-[var(--tooltip-background-color)]',
    left: 'border-l-[var(--tooltip-arrow-size)] border-l-[var(--tooltip-background-color)]',
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}

      {visible && (
        <div
          className={`absolute z-50 p-2 text-sm text-white bg-black rounded-md shadow-lg whitespace-nowrap overflow-hidden 
            truncate max-w-xs ${positionClasses[position]}`}
          style={{ '--tooltip-arrow-size': '6px' } as React.CSSProperties}
        >
          {content}

          {arrow && (
            <div
              className={`absolute w-0 h-0 border-transparent ${arrowStyles[position]}`}
              style={{
                position: 'absolute',
                borderWidth: '6px',
                [position === 'top'
                  ? 'bottom'
                  : position === 'right'
                  ? 'left'
                  : position === 'bottom'
                  ? 'top'
                  : 'right']: '-6px',
                ...(position === 'top' || position === 'bottom'
                  ? { left: '50%', transform: 'translateX(-50%)' }
                  : { top: '50%', transform: 'translateY(-50%)' }),
              }}
            ></div>
          )}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
