import { connect } from 'react-redux';

import MainContent from 'src/components/MainContent';

import { fetchTasks } from 'src/actions';

const mapStateToProps = (state) => ({
  filteredList: state.filteredList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTasks: () => {
    dispatch(fetchTasks());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
