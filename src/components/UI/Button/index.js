import React from 'react';

import './styles.scss';

function Button({ label, className }) {
  return (
    <div
      className={`button__container d-flex align-items-center justify-content-center ${className}`}
    >
      {label}
    </div>
  );
}

export default Button;
