import React from 'react';
import PropTypes from 'prop-types';

import './couter.scss';

const Counter = ({ count }) => (
  <div className="counter">
    <p>{count} items left</p>
    <p className="counter-clear">Vider les tâches</p>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Counter;
