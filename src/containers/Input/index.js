import { connect } from 'react-redux';

import { setNewTask, addTask } from 'src/actions';

import Input from 'src/components/Input';

const mapStateToProps = (state) => ({
  newTask: state.newTask,
});

const mapDispatchToProps = (dispatch) => ({
  setNewTask: (value) => {
    dispatch(setNewTask(value));
  },
  addTask: () => {
    dispatch(addTask());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Input);
