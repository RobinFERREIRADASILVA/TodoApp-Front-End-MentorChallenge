import axios from 'axios';
import { FETCH_TASKS, saveTasks } from 'src/actions';

const tasks = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TASKS:
      axios.get('http://localhost:3000/api/tasks')
        .then((response) => {
          console.log(response);
          store.dispatch(saveTasks(response.data));
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
