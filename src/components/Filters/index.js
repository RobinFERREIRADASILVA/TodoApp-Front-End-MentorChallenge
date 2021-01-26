import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import './filters.scss';

const Filters = ({ allFilters, allTask, handleFilters }) => (
  <div className="filters-container">
    <ul className="filters-list">
      { allFilters.map((filter) => (
        <li className={classNames('filters-item', { 'filter-on': filter.active })} onClick={() => handleFilters(filter.name)} key={filter.name}>{filter.name}</li>
      )) }
    </ul>
  </div>
);

Filters.propTypes = {
  allFilters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  })).isRequired,
  handleFilters: PropTypes.func.isRequired,

};

export default Filters;
