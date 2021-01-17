import React from "react";
import { FiArrowRight, FiSearch } from "react-icons/fi";

import "./styles.scss";

function Search() {
  return (
    <div className="d-flex align-items-center justify-content-center mt-4">
      <div className="input d-flex align-items-center">
        <FiSearch size={20} color="a599b5" />
        <input placeholder="Procurar por áreas..." />
      </div>
      <button>
        <FiArrowRight size={20} color="white" />
      </button>
    </div>
  );
}

export default Search;
