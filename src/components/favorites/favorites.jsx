import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';

import {getUniqueCitiesNames} from '../../utils/utils';

const Favorites = ({isAuthorizationRequired, currentCity, favorites}) => {
  const citiesNames = getUniqueCitiesNames(favorites);

  return (
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {citiesNames.map((city, i) => {
            return (
              <li className="favorites__locations-items" key={city + i + `favorites`}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{city}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {favorites.map((el) => {
                    return (
                      <OfferCard
                        key={el.title + el.id}
                        cardInfo={el}
                      />
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <footer className="footer container">
        <Link to={`/${currentCity}`} className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentCity: PropTypes.string,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.data.offers,
  isAuthorizationRequired: state.userState.isAuthorizationRequired,
  currentCity: state.userState.city,
  favorites: state.data.favorites
});

export {Favorites};

export default connect(mapStateToProps)(Favorites);
