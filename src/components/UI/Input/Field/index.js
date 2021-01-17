import React from 'react';
import { FiKey, FiCalendar, FiUser } from 'react-icons/fi';
import { SiMailDotRu } from 'react-icons/si';

import './styles.scss';

function Field({ type, label, placeholder, className }) {
  const icon =
    (type === 'email' && <SiMailDotRu size={20} />) ||
    (type === 'password' && <FiKey size={20} />) ||
    (type === 'date' && <FiCalendar size={20} />) ||
    (type === 'name' && <FiUser size={20} />);

  return (
    <div className={`input__container ${className}`}>
      <h6>{label}</h6>
      <div className="input d-flex align-items-center">
        {icon}
        <input
          placeholder={placeholder}
          type={type === 'date' || type === 'name' ? '' : type}
        />
      </div>
    </div>
  );
}

export default Field;
