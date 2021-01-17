import React from 'react';
import { FiChevronRight, FiMapPin } from 'react-icons/fi';

import './styles.scss';

function LocationCard({ label, description, className }) {
  return (
    <button className={`${className} card__location d-flex align-items-center`}>
      <div className="card__location__icon ml-2">
        <FiMapPin size={20} color="#FFC759" />
      </div>

      <div className="ml-1 flex-fill">
        <h6>{label}</h6>
        {description && <p>{description}</p>}
      </div>

      <button className="button__icon">
        <FiChevronRight size={20} color="white" />
      </button>
    </button>
  );
}

export default LocationCard;
