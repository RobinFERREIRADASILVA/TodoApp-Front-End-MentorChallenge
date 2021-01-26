/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

const Input = ({ newTask, setNewTask, addTask }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    addTask();
  };

  return (
    <div className="input">
      <button type="button" className="input-checkbox" />
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={(event) => setNewTask(event.target.value)} className="input-text" placeholder="Ajouter une nouvelle tâche" />
      </form>
    </div>
  );
};

Input.propTypes = {
  newTask: PropTypes.string.isRequired,
  setNewTask: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default Input;
