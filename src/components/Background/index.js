import React from 'react';
import { useLocation } from 'react-router-dom';

// Assets
import background from '~/resources/assets/background-desktop.png';
import mobile_background from '~/resources/assets/background-mobile.png';

// Hooks
import useWindowDimensions from '~/hooks/getWindowDimensions';

// Style
import './styles.scss';

function Background() {
  const { width } = useWindowDimensions();

  const location = useLocation();

  if (
    location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname === '/register/step'
  ) {
    return (
      <div className="bg">
        <img src={width > 700 ? background : mobile_background} alt="" />
        <div className="bg--purple"></div>
      </div>
    );
  }

  return (
    <div className="bg">
      <img src={width > 700 ? background : mobile_background} alt="" />
    </div>
  );
}

export default Background;
