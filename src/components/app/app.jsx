import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import Favorites from '../favorites/favorites.jsx';
import FavoritesEmpty from '../favorites-empty/favorites-empty.jsx';
import Header from '../header/header.jsx';
import Loader from '../loader/loader.jsx';
import MainEmpty from '../main-empty/main-empty.jsx';
import MainPage from '../main-page/main-page.jsx';
import Property from '../property/property.jsx';
import SignIn from '../sign-in/sign-in.jsx';

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

    if (hasError) {
      return (
        <React.Fragment>
          <Header />
          <MainEmpty />;
        </React.Fragment>
      );
    }

    const {currentCity, offers} = this.props;

    if (offers === null) {
      return <Loader />;
    }

    const currentCityOffers = getCurrentCityOffers(offers, currentCity);

    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/:city(|Amsterdam|Brussels|Cologne|Dusseldorf|Hamburg|Paris)"
            render={() => <MainPage currentCityOffers={currentCityOffers} />} />
          <Route exact path="/:city(|Amsterdam|Brussels|Cologne|Dusseldorf|Hamburg|Paris)/:id(\d+)" render={({match}) =>
            <Property
              pageId={parseInt(match.params.id, 10)}
              currentCityOffers={currentCityOffers}
            /> }
          />
          <Route exact path="/favorites" component={Favorites}/>
          <Route exact path="/favorites-empty" component={FavoritesEmpty}/>
          <Route exact path="/login" component={SignIn}/>

          <Route component={MainEmpty}/>
        </Switch>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  currentCity: PropTypes.string,
  offers: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.userState.city,
  offers: state.data.offers
});

export {App};

export default connect(mapStateToProps)(App);
