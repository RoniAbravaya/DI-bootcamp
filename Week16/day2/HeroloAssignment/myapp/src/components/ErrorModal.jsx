// ErrorModal.jsx
import React from 'react';

const ErrorModal = ({ error, onClose }) => {
  return (
    <div className="error-modal">
      <div className="error-content">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ErrorModal;
