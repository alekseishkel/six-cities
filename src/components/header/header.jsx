import React from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import ActionCreator from '../../action-creator/action-creator';

const Header = ({isAuthorizationRequired, user, signIn}) => {
  // const {avatar_url: avatar, email} = user;
  let userName = `Sing In`;
  let avatarSrc = `/img/avatar.svg`;


  if (user && isAuthorizationRequired === false) {
    userName = user.email;
    avatarSrc = `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/2.jpg`;
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user" onClick={() => signIn(isAuthorizationRequired)}>
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div style={{backgroundImage: `url(${avatarSrc})`}} className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{userName}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
  user: PropTypes.object,
  signIn: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  user: state.data.user,
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (isAuthorizationRequired) => {
    dispatch(ActionCreator.requireAuthorization(!isAuthorizationRequired));
  }
});

export {Header};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
