import { connect } from 'react-redux';

import Filters from 'src/components/Filters';

import { handleFilters } from 'src/actions';

const mapStateToProps = (state) => ({
  allFilters: state.allFilters,
});

const mapDispatchToProps = (dispatch) => ({
  handleFilters: (name) => {
    dispatch(handleFilters(name));
  },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Filters);
