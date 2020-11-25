import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import SuggestionsList from '../suggestions-list/suggestions-list.jsx';
import Map from '../map/map.jsx';
import CitiesTabs from '../cities-list/cities-tabs.jsx';
import offersCardsInfo from '../../mocks/offers';

const MainPage = (props) => {
  const {func, city} = props;
  const offersNumber = offersCardsInfo[city].offers.length;

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
          {<CitiesTabs />}
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersNumber} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              {<SuggestionsList func={func} isNeighbourhood={false} places={offersCardsInfo} city={city} />}
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {<Map places={offersCardsInfo} city={city} />}
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
  city: PropTypes.string.isRequired
};

// получать сити в каждом отдельном компоненте
const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city
});

export {MainPage};

export default connect(mapStateToProps)(MainPage);
