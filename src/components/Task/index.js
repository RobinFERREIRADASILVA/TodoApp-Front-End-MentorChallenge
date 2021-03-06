/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './task.scss';

const Task = ({
  label,
  done,
  taskComplete,
  _id,
  deleteTask }) => {
  const [close, setClose] = useState(false);

  const handleCloseIcon = () => {
    setClose(true);
  };
  const handleClearClose = () => {
    setClose(false);
  };

  return (
    <div className={classNames('task', { 'task-complete': done })} onMouseOver={handleCloseIcon} onMouseLeave={handleClearClose}>
      <span className="task-checkbox" onClick={() => taskComplete(_id, done)}> {done ? <i className="fas fa-check checked" ></i>
        : ''}
      </span>
      <p className="task-content">{ label }</p>
      {close && <i className="fas fa-times close-icon" onClick={() => deleteTask(_id)} />}
    </div>
);
}

Task.propTypes = {
  _id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  taskComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
