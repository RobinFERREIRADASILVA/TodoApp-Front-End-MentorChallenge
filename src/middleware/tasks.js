import axios from 'axios';
import {
  FETCH_TASKS,
  ADD_TASK,
  DELETE_TASK,
  saveTasks,
} from 'src/actions';

const tasks = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_TASK:
      axios.post('http://localhost:3000/api/task', {
        label: store.getState().newTask,
        done: false,
        userId: 1,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    case FETCH_TASKS:
      axios.get('http://localhost:3000/api/task')
        .then((response) => {
          store.dispatch(saveTasks(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    case DELETE_TASK:
      axios.delete('http://localhost:3000/api/task', {
        data: {
          _id: action.id,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    default:
      next(action);
  }
};
export default tasks;
