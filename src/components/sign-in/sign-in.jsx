import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import Operations from '../../operations/operations';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: ``,
      password: ``
    };
  }

  render() {
    const {isAuthorizationRequired: status, onLogin} = this.props;

    const changeUserEmail = (evt) => {
      this.setState({
        email: evt.target.value
      });
    };

    const changeUserPassword = (evt) => {
      this.setState({
        password: evt.target.value
      });
    };

    const submitUserData = () => {
      const {email, password} = this.state;

      onLogin(email, password, false);
    };

    if (status === false) {
      return <Redirect to="/favorites" />;
    }

    return (
      <div className="page page--gray page--login">
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post">
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    required=""
                    onChange={changeUserEmail}/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    required=""
                    onChange={changeUserPassword}/>
                </div>
                <Link to="/" className="login__submit form__submit button" type="submit" onClick={submitUserData}>Sign in</Link>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

SignIn.propTypes = {
  onLogin: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onLogin: (email, password, status) => {
    dispatch(Operations.signIn(email, password, false));
  }
});

export {SignIn};

export default connect(null, mapDispatchToProps)(SignIn);
