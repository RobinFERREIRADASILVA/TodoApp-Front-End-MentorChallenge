import React from 'react';

import './styles.scss';

import Header from 'src/containers/Header';
import MainContent from 'src/containers/MainContent';

// == Composant
// eslint-disable-next-line react/prefer-stateless-function
const App = () => (
  <div className="app">
    <Header />
    <MainContent />
  </div>

);

// == Export
export default App;
