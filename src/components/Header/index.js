import React from 'react';

import './header.scss';

const Header = () => (
  <div className="header">
    <div className="header-title-container">
      <h1 className="header-title">Todo</h1>
      <i className="fas fa-moon header-moon" />
    </div>
  </div>
);

export default Header;
