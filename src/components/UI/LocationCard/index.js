import React from 'react';
import { FiChevronRight, FiMapPin } from 'react-icons/fi';

import './styles.scss';

function LocationCard() {
  return (
    <button className="card__location d-flex align-items-center">
      <div className="card__location__icon ml-2">
        <FiMapPin size={20} color="#FFC759" />
      </div>

      <div className="ml-1 flex-fill">
        <h6>Escolha a sua localização</h6>
        <p>vamos oferecer conteúdos melhores para você</p>
      </div>

      <button className="button__icon">
        <FiChevronRight size={20} color="white" />
      </button>
    </button>
  );
}

export default LocationCard;
