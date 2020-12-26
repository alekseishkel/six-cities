import React, {Component} from 'react';
import {connect} from 'react-redux';
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

    const submitUserData = (evt) => {
      evt.preventDefault();

      const {email, password} = this.state;

      this.props.onLogin(email, password);
    };
    return (
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

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
                <button className="login__submit form__submit button" type="submit" onClick={submitUserData}>Sign in</button>
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
};

const mapDispatchToProps = (dispatch) => ({
  onLogin: (email, password) => {
    dispatch(Operations.signIn(email, password));
  }
});

export {SignIn};

export default connect(null, mapDispatchToProps)(SignIn);
