import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './header.scss';

import backgroundMobile from 'src/assets/images/bg-mobile-light.jpg';
import backgroundDesktop from 'src/assets/images/bg-desktop-light.jpg';

const Header = ({handleWindowWidth, largeur}) => {
  useEffect(() => {
    /** Update state value for windowWidth when the user resize its window */
    const changeWidth = () => {
      handleWindowWidth(window.innerWidth);
    };
    /** Add event listener on resizing window */
    window.addEventListener('resize', changeWidth);
    /** Clean up function */
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  let cssClass = {
    backgroundImage: `url(${backgroundMobile})`,
  };

  if (largeur > 372) {
    cssClass = {
      backgroundImage: `url(${backgroundDesktop})`,
    };
  }
  return (
    <div className="header" style={cssClass}>
      <div className="header-title-container">
        <h1 className="header-title">Todo</h1>
        <i className="fas fa-moon header-moon" />
      </div>
    </div>
  );
};

Header.propTypes = {
  largeur: PropTypes.number.isRequired,
  handleWindowWidth: PropTypes.func.isRequired,
};

export default Header;
