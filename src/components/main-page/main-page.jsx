import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import SuggestionsList from '../suggestions-list/suggestions-list.jsx';
import Map from '../map/map.jsx';
import CitiesTabs from '../cities-tabs/cities-tabs.jsx';
import SortOptions from '../sort-options/sort-options.jsx';
import Loader from '../loader/loader.jsx';

const MainPage = (props) => {
  const {func, currentCity, offers, sorting} = props;

  console.log(offers);

  const getCurrentCityOffers = () => {
    return offers.filter((el) => el.city.name === currentCity);
  };

  const getNamesOfSixCities = () => {
    let cities = new Set();
    offers.forEach((el) => cities.add(el.city.name));

    return Array.from(cities);
  };

  if (offers === null) {
    return <Loader />;
  }

  return (
    <div className="page page--gray page--main">
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
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          {<CitiesTabs cities={getNamesOfSixCities()} currentCity={currentCity} />}
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{getCurrentCityOffers().length} places to stay in {currentCity}</b>
              {<SortOptions />}
              {<SuggestionsList func={func} currentCity={currentCity} offers={getCurrentCityOffers()} sorting={sorting}/>}
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {<Map offers={getCurrentCityOffers()} currentCity={currentCity} />}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  func: PropTypes.func.isRequired,
  currentCity: PropTypes.string,
  offers: PropTypes.array,
  sorting: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.userState.city,
  offers: state.data.offers,
  sorting: state.userState.sorting
});

export {MainPage};

export default connect(mapStateToProps)(MainPage);
