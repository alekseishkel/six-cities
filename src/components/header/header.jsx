import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({currentCity, isAuthorized, user}) => {
  let avatarSrc = `/img/avatar.svg`;
  let userName = `Sing In`;

  if (isAuthorized === true && user) {
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
                <Link to={!isAuthorized ? `/login` : `/favorites`} className="header__nav-link header__nav-link--profile" href="#">
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
  currentCity: PropTypes.string,
  isAuthorized: PropTypes.bool.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.userState.city,
  isAuthorized: state.userState.isAuthorized,
  user: state.data.user,
});

export {Header};

export default connect(mapStateToProps)(Header);
