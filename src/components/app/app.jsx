import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import PropTypes from 'prop-types';

import Header from '../header/header.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import MainPage from '../main-page/main-page.jsx';
import MainEmpty from '../main-empty/main-empty.jsx';
import Property from '../property/property.jsx';
import Loader from '../loader/loader.jsx';
import Favorites from '../favorites/favorites.jsx';
import FavoritesEmpty from '../favorites-empty/favorites-empty.jsx';

import {getCurrentCityOffers} from '../../utils/utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false
    };
  }

  componentDidCatch() {
    this.setState({hasError: true});
  }

  render() {
    const {hasError} = this.state;
    const {offers, isAuthorizationRequired, currentCity} = this.props;

    if (offers === null) {
      return <Loader />;
    }

    if (hasError) {
      return (
        <React.Fragment>
          <Header isAuthorizationRequired={isAuthorizationRequired} currentCity={currentCity}/>
          <MainEmpty />;
        </React.Fragment>
      );
    }

    const currentCityOffers = getCurrentCityOffers(offers, currentCity);

    return (
      <React.Fragment>
        <Header isAuthorizationRequired={isAuthorizationRequired} currentCity={currentCity}/>
        <Switch>
          <Route exact path="/login" component={SignIn}/>
          <Route exact path="/favorites" component={Favorites}/>
          <Route exact path="/favorites-empty" component={FavoritesEmpty}/>
          <Route exact path="/:city(Amsterdam|Brussels|Cologne|Dusseldorf|Hamburg|Paris)"
            render={(history) => <MainPage history={history} currentCityOffers={currentCityOffers} />} />
          <Route exact path="/:city/:id(\d+)" render={({match}) =>
            <Property
              offer={currentCityOffers.filter((offer) => offer.id === parseInt(match.params.id, 10))[0]}
              pageId={parseInt(match.params.id, 10)}
              currentCityOffers={currentCityOffers}
            /> }
          />
          <Route render={() => <MainEmpty />} />
        </Switch>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  currentCity: PropTypes.string,
  isAuthorizationRequired: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.data.offers,
  currentCity: state.userState.city,
  isAuthorizationRequired: state.userState.isAuthorizationRequired
});

export {App};

export default connect(mapStateToProps)(App);
