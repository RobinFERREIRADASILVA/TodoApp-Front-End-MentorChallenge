import { connect } from 'react-redux';

import Task from 'src/components/Task';

import { setTaskComplete, deleteTask, setCount } from 'src/actions';

const mapStateToProps = (state) => ({
  filteredList: state.filteredList,
});

const mapDispatchToProps = (dispatch) => ({
  taskComplete: (id, done) => {
    dispatch(setTaskComplete(id, done));
    dispatch(setCount());
  },
  deleteTask: (id) => {
    dispatch(deleteTask(id));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Task);
