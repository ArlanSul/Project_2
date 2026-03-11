import React from 'react';

const Card = () => {
  return (
    <div className={`card-container ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-content">
        {isFlipped ? (
          <div className="card-back">
            <p>{card.answer}</p>
          </div>
        ) : (
          <div className="card-front">
            <p>{card.question}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;