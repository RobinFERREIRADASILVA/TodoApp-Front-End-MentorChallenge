import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import Header from 'src/containers/Header';
import MainContent from 'src/containers/MainContent';
import Login from 'src/containers/Login';

// == Composant
// eslint-disable-next-line react/prefer-stateless-function
const App = ({ isLogged }) => (
  <div className="app">
    <Header />
    {!isLogged && <Login />}
    {isLogged && <MainContent /> }
  </div>

);

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default App;
