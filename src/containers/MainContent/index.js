import { connect } from 'react-redux';

import MainContent from 'src/components/MainContent';

const mapStateToProps = (state) => ({
  filteredList: state.filteredList,
});

const mapDispatchToProps = (dispatch) => ({

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
