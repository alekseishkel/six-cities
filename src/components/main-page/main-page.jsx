import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import SuggestionsList from '../suggestions-list/suggestions-list.jsx';
import Map from '../map/map.jsx';
import CitiesTabs from '../cities-tabs/cities-tabs.jsx';
import SortOptions from '../sort-options/sort-options.jsx';

import {getCurrentCityOffers, getUniqueCitiesNames} from '../../utils/utils';

const MainPage = (props) => {
  const {currentCity, offers, sorting} = props;

  const currentCityOffers = getCurrentCityOffers(offers, currentCity);
  // const currentCity = history.location.pathname.slice(1);


  // const getCurrentCityOffers = () => {
  //   return offers.filter((el) => el.city.name === currentCity);
  // };

  // const getUniqueCitiesNames = () => {
  //   let cities = new Set();
  //   offers.forEach((el) => cities.add(el.city.name));

  //   return Array.from(cities);
  // };


  // if (isAuthorizationRequired === true) {
  //   return <SignIn isAuthorizationRequired={isAuthorizationRequired}/>;
  // }

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesTabs cities={getUniqueCitiesNames(offers)} currentCity={currentCity} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentCityOffers.length} places to stay in {currentCity}</b>
              {<SortOptions />}
              {<SuggestionsList offers={currentCityOffers} sorting={sorting} />}
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {<Map offers={currentCityOffers} currentCity={currentCity} />}
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
  sorting: PropTypes.string.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.userState.city,
  offers: state.data.offers,
  sorting: state.userState.sorting,
  isAuthorizationRequired: state.userState.isAuthorizationRequired,
});

export {MainPage};

export default connect(mapStateToProps)(MainPage);
