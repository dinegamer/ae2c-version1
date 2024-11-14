import React from 'react';

const GlassmorphismCard = ({ children }) => {
  return (
    <div 
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        color: 'white',
      }}
    >
      {children}
    </div>
  );
};

export default GlassmorphismCard;