import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';

const Header = ({isAuthorizationRequired, user, currentCity}) => {
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
            <Link to={`/${currentCity}`} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to="/login" className="header__nav-link header__nav-link--profile" href="#">
                  <div style={{backgroundImage: `url(${avatarSrc})`}} className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{userName}</span>
                </Link>
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
  currentCity: PropTypes.string.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  user: state.data.user,
});

export {Header};

export default connect(mapStateToProps)(Header);
