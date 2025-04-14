// src/projects/celebrate/Celebrate.js
import React, { useCallback } from 'react';
import confetti from 'canvas-confetti';
import './Celebrate.css';

function Celebrate() {
  const handleClick = useCallback(() => {
    confetti({
      particleCount: 80,
      spread: 100,
    });
  }, []);

  return (
    <div className="celebrate-container">
      <button className="celebrate-button" onClick={handleClick}>
        <span role="img" aria-label="celebrate">
          🎉
        </span>{' '}
        Celebrate!
      </button>
      <p>For when you need to celebrate</p>
    </div>
  );
}

export default Celebrate;
