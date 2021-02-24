import { connect } from 'react-redux';

import Login from 'src/components/Login';

import { changeField, displaySignup } from 'src/actions';

const mapStateToProps = (state) => ({
  email: state.email,
  password: state.password,
  secondPassword: state.secondPassword,
  needSignup: state.needSignup,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  displaySignup: () => {
    dispatch(displaySignup());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Login);
