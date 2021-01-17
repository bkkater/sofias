import React from 'react';

import { FiMenu } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

import logo from '~/resources/assets/logo.png';
import fullLogo from '~/resources/assets/fullLogo.png';

import './styles.scss';

function Header() {
  const location = useLocation();

  if (location.pathname === '/login') {
    return <img src={fullLogo} alt="Sofias" className="fullLogo mb-5" />;
  }

  return (
    <div className="header__content d-flex justify-content-between align-items-center mb-5">
      <div>
        <FiMenu color="black" size={24} />
        <img src={logo} alt="Sofias" className="ml-3" />
      </div>

      <span>
        Já tem conta? <Link to="/login">Acessar</Link>
      </span>
    </div>
  );
}

export default Header;
