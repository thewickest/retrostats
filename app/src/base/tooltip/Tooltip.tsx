/**This component has been done with AI, don't freak out */
import React, { useState, useRef, ReactNode } from 'react';

interface TooltipProps {
  content: ReactNode; // Content or custom component to display
  position?: 'top' | 'right' | 'bottom' | 'left'; // Tooltip position
  delay?: number; // Delay before showing the tooltip (in ms)
  children: ReactNode; // Target element
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'top',
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

  return (
    <div className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}>
      {children}
      {visible && (
        <div className={`absolute z-50 p-2 text-sm font-base text-text dark:text-black bg-main rounded-base shadow whitespace-nowrap
          overflow-hidden truncate max-w-xs ${positionClasses[position]} border-border border-2`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;