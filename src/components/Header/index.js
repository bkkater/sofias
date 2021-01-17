import React from 'react';

import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '~/resources/assets/logo.png';

import './styles.scss';

function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center mb-5">
      <div>
        <FiMenu color="black" size={24} />
        <img src={logo} alt="Sofias" className="ml-3" />
      </div>

      <span>
        Já tem conta? <Link>Acessar</Link>
      </span>
    </div>
  );
}

export default Header;
