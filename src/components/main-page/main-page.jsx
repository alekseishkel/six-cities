import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CitiesTabs from '../cities-tabs/cities-tabs.jsx';
import Map from '../map/map.jsx';
import SortOptions from '../sort-options/sort-options.jsx';
import SuggestionsList from '../suggestions-list/suggestions-list.jsx';

const MainPage = (props) => {
  const {currentCity, currentCityOffers} = props;

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          {<CitiesTabs />}
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentCityOffers.length} places to stay in {currentCity}</b>
              {<SortOptions />}
              {<SuggestionsList offers={currentCityOffers} />}
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {<Map offers={currentCityOffers} />}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  currentCity: PropTypes.string,
  currentCityOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.userState.city,
});

export {MainPage};

export default connect(mapStateToProps)(MainPage);
