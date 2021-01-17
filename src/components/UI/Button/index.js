import React from 'react';

import { Link } from 'react-router-dom';

import './styles.scss';

function Button({ label, className, nextRoute, onClick }) {
  if (!nextRoute) {
    return (
      <button
        className={`button__container d-flex align-items-center justify-content-center ${className}`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }

  return (
    <Link
      to={nextRoute}
      className={`button__container d-flex align-items-center justify-content-center ${className}`}
    >
      {label}
    </Link>
  );
}

export default Button;
