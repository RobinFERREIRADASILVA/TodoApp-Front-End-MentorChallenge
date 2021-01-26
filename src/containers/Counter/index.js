import { connect } from 'react-redux';

import Counter from 'src/components/Counter';

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
