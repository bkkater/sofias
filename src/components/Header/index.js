import React from "react";

import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.scss";

function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center mb-5">
      <FiMenu color="black" size={24} />

      <span>
        Já tem conta? <Link>Acessar</Link>
      </span>
    </div>
  );
}

export default Header;
