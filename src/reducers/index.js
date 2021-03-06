import {
  SET_TASK,
  ADD_TASK,
  SET_TASK_COMPLETE,
  DELETE_TASK,
  SET_COUNT,
  HANDLE_FILTERS,
  HANDLE_WINDOW_WIDTH,
  SAVE_TASKS,
  CHANGE_FIELD,
  DISPLAY_SIGNUP,
} from 'src/actions';

// Import in local our filters
import filters from 'src/data/filters';

const initialState = {
  // ici l'état initial
  allTask: [],
  newTask: '',
  allFilters: filters,
  filteredList: [],
  count: 0,
  isLogged: false,
  email: '',
  password: '',
  secondPassword: '',
  needSignup: false,
  largeur: window.innerWidth,
};

function todoReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_TASK:
      return {
        ...state,
        newTask: action.newTask,
      };
    case SAVE_TASKS:
      return {
        ...state,
        allTask: action.tasks,
        filteredList: action.tasks,
      };
    case ADD_TASK: {
      const ids = state.allTask.map((task) => task.id);
      const nextId = Math.max(...ids) + 1;
      const testTask = {
        id: nextId,
        label: state.newTask,
        done: false,
      };
      const newList = [...state.allTask, testTask];
      return {
        ...state,
        allTask: newList,
        filteredList: newList,
        newTask: '',
      };
    }
    case SET_TASK_COMPLETE: {
      const newList = state.allTask.map((task) => {
        if (task._id === action.id) {
          const taskCopy = { ...task, done: !action.done };
          return taskCopy;
        }
        return task;
      });
      return {
        ...state,
        allTask: newList,
        filteredList: newList,
      };
    }
    case DELETE_TASK: {
      const listWithDelete = state.allTask.filter((task) => task._id !== action.id);
      return {
        ...state,
        allTask: listWithDelete,
        filteredList: listWithDelete,
      };
    }
    case SET_COUNT: {
      const newCount = state.allTask.filter((task) => task.done === false).length;
      return {
        ...state,
        count: newCount,
      };
    }
    case HANDLE_FILTERS: {
      let taskActive = [];

      if (action.name === 'Active') {
        taskActive = state.allTask.filter((task) => task.done === false);
      }
      else if (action.name === 'Completed') {
        taskActive = state.allTask.filter((task) => task.done === true);
      }
      else if (action.name === 'All') {
        taskActive = state.allTask;
      }
      const newFilters = state.allFilters.map((filter) => {
        if (filter.active === true)
        {
          const oldFilter = { ...filter, active: false };
          return oldFilter;
        }
        if (filter.name === action.name)
        {
          const newFilter = { ...filter, active: true };
          return newFilter;
        }
        return filter;
      });
      return {
        ...state,
        filteredList: taskActive,
        allFilters: newFilters,
      };
    }
    case HANDLE_WINDOW_WIDTH:
      return {
        ...state,
        largeur: action.width,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case DISPLAY_SIGNUP:
      return {
        ...state,
        needSignup: true,
      };
    default:
      return state;
  }
}

export default todoReducer;
