import React from 'react';
import PropTypes from 'prop-types';

import './login.scss';

import Field from 'src/components/Field';

const Login = ({ changeField, email, password, secondPassword, displaySignup, needSignup }) => {
  const handleSubmit = (event) => {
    console.log('c\'est submit');
    event.preventDefault();
  };
  const handleSignup = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      {!needSignup && (
        <div className="login-wrapper">
          <h2>Connexion</h2>
          <form autoComplete="on" className="login-form" onSubmit={handleSubmit}>
            <Field
              name="email"
              placeholder="Adresse Email"
              manageChange={changeField}
              value={email}
            />
            <Field
              name="password"
              type="password"
              placeholder="Mot de passe"
              manageChange={changeField}
              value={password}
            />
            <button
              type="submit"
              className="login-button"
            >
              Valider
            </button>
          </form>
          <p className="login-signup" to="inscription" href="&" onClick={displaySignup}>Pas de compte ? Cliquer ici !</p>
        </div>
      )}
      {needSignup && (
        <div className="login-wrapper">
          <h2>Inscription</h2>
          <form autoComplete="on" className="login-form" onSubmit={handleSignup}>
            <Field
              name="email"
              placeholder="Adresse Email"
              manageChange={changeField}
              value={email}
            />
            <Field
              name="password"
              type="password"
              placeholder="Mot de passe"
              manageChange={changeField}
              value={password}
            />
            <Field
              name="secondPassword"
              type="password"
              placeholder="Validation du mot de passe"
              manageChange={changeField}
              value={secondPassword}
              />
            <button
              type="submit"
              className="login-button"
            >
              Valider
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

Login.propTypes = {
  changeField: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  secondPassword: PropTypes.string.isRequired,
  needSignup: PropTypes.bool.isRequired,
  displaySignup: PropTypes.func.isRequired,
};

export default Login;
