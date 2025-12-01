import React from 'react';

interface TitleBarProps {
  title: string;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

export const TitleBar: React.FC<TitleBarProps> = ({ title, onClose, onMinimize, onMaximize }) => {
  return (
    <div className="title-bar">
      <div className="title-bar-text">
        {title}
      </div>
      <div className="title-bar-controls">
        <button aria-label="Minimize" onClick={onMinimize}>
          <img src="/icons/minimize.png" alt="Minimize" className="title-bar-icon" />
        </button>
        <button aria-label="Maximize" onClick={onMaximize}>
          <img src="/icons/maximize.png" alt="Maximize" className="title-bar-icon" />
        </button>
        <button aria-label="Close" onClick={onClose} className="close-btn">
          <img src="/icons/close.png" alt="Close" className="title-bar-icon" />
        </button>
      </div>
    </div>
  );
};
