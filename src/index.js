import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import '~/resources/scss/index.scss'; // Bootstrap

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
