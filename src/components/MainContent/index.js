import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './maincontent.scss';

import Input from 'src/containers/Input';
import Task from 'src/containers/Task';
import Filters from 'src/containers/Filters';
import Counter from 'src/containers/Counter';

const MainContent = ({
  filteredList,
  fetchTasks,
}) => {
  useEffect(() => {
    fetchTasks();
  }, []);
  const orderByTodoTasks = filteredList.sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className="mainContent-container">
      <div className="mainContent">
        <Input />
        <div className="task-container">
          {orderByTodoTasks.map((task) => (
            <Task
              key={task.id}
              {...task}
            />
          ))}
        </div>
        <Counter />
        <Filters />
      </div>
    </div>
  );
};

MainContent.propTypes = {
  filteredList: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchTasks: PropTypes.func.isRequired,
};

export default MainContent;
