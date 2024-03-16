import React from 'react';

const ToggleButton = ({ label, toggled, onToggle }) => {
  return (
    <button className={`toggle-button ${toggled ? 'active' : ''}`} onClick={onToggle}>
      {label}
    </button>
  );
};

export default ToggleButton;
