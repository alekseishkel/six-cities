import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';

import ActionCreator from '../../action-creator/action-creator';

import {getUniqueCitiesNames} from '../../utils/utils';

const Favorites = ({currentCity, favorites, onCityClick}) => {
  const citiesNames = getUniqueCitiesNames(favorites);

  if (favorites.length === 0) {
    return <Redirect to='/favorites-empty' />;
  }

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
                    <Link to={`/${city}`}
                      className="locations__item-link"
                      onClick={() => onCityClick(city)}>
                      <span>{city}</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {favorites
                    .filter((favoriteCity) => favoriteCity.city.name === city)
                    .map((el) => {
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
  currentCity: PropTypes.string,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCityClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.userState.city,
  favorites: state.data.favorites
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.changeSorting(`Popular`));
  },
});

export {Favorites};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
