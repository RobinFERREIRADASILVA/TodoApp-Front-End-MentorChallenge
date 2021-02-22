import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import tasks from 'src/middleware/tasks';
import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    tasks,
  ),
);
const store = createStore(
  reducer,
  enhancers,
);

export default store;
