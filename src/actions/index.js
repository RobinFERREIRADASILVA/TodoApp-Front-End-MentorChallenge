export const SET_TASK = 'SET_TASK';
export const ADD_TASK = 'ADD_TASK';
export const SET_TASK_COMPLETE = 'SET_TASK_COMPLETE';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_COUNT = 'SET_COUNT';
export const HANDLE_FILTERS = 'HANDLE_FILTERS';
export const HANDLE_WINDOW_WIDTH = 'HANDLE_WINDOW_WIDTH';

export const setNewTask = (newTask) => ({
  type: SET_TASK,
  newTask,
});

export const addTask = () => ({
  type: ADD_TASK,
});

export const setTaskComplete = (id, done) => ({
  type: SET_TASK_COMPLETE,
  id,
  done,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  id,
});

export const setCount = () => ({
  type: SET_COUNT,
});

export const handleFilters = (name) => ({
  type: HANDLE_FILTERS,
  name,
});

export const handleWindowWidth = (width) => ({
  type: HANDLE_WINDOW_WIDTH,
  width,
});
