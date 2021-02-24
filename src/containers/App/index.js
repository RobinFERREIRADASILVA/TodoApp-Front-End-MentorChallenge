import { connect } from 'react-redux';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
});

const mapDispatchToProps = (dispatch) => ({

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
