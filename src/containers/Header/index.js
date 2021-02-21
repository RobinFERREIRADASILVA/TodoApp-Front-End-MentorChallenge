import { connect } from 'react-redux';

import Header from 'src/components/Header';

import { handleWindowWidth } from 'src/actions';

const mapStateToProps = (state) => ({
  largeur: state.largeur,
});

const mapDispatchToProps = (dispatch) => ({
  handleWindowWidth: (width) => {
    dispatch(handleWindowWidth(width));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Header);
