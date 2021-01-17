import React from 'react';

import './styles.scss';

const Card = ({ image, label, description, fullWidth }) => {
  const cardClass = ['card__item'];

  if (fullWidth) {
    cardClass.push('card__item--full-width');
  }

  return (
    <div className={cardClass.join(' ')}>
      <span>{label}</span>
      <p>{description}</p>

      <img src={image} alt="" />
    </div>
  );
};

export default Card;
