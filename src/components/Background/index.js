import React from 'react';

// Assets
import background from '~/resources/assets/background-desktop.png';
import mobile_background from '~/resources/assets/background-mobile.png';

// Hooks
import useWindowDimensions from '~/hooks/getWindowDimensions';

// Style
import './styles.scss';

function Background() {
  const { width } = useWindowDimensions();

  return (
    <div className="bg">
      <img src={width > 700 ? background : mobile_background} alt="" />
    </div>
  );
}

export default Background;
