import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
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
    const {currentCity, isAuthorized: status, onLogin} = this.props;

    if (status === true) {
      return <Redirect to={`/${currentCity}`} />;
    }

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

      onLogin(email, password, true);
    };

    return (
      <div className="page page--gray page--login">
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={submitUserData}>
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
                <button className="login__submit form__submit button" type="submit" >Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <span className="locations__item-link">Amsterdam</span>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

SignIn.propTypes = {
  currentCity: PropTypes.string.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.userState.city,
  isAuthorized: state.userState.isAuthorized
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (email, password, status) => {
    dispatch(Operations.signIn(email, password, status));
  }
});

export {SignIn};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
