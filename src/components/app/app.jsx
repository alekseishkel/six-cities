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

class App extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false
    };
  }

  render() {
    const {hasError} = this.state;
    const {offers, isAuthorizationRequired, currentCity} = this.props;

    if (offers === null) {
      return <Loader />;
    }

    if (hasError) {
      return <MainEmpty />;
    }

    return (
      <Router>
        <Header isAuthorizationRequired={isAuthorizationRequired} currentCity={currentCity}/>
        <Switch>

          <Route exact path="/login" render={() =>
            <SignIn isAuthorizationRequired={isAuthorizationRequired} />
          } />
          <Route exact path="/favorites" component={Favorites}/>
          <Route exact path="/favorites-empty" component={FavoritesEmpty}/>
          <Route exact path="/:city?" render={(history) => <MainPage history={history}/>} />
          <Route exact path="/:city/:id" render={({match}) =>
            <Property offer={offers.filter((offer) => offer.id === parseInt(match.params.id, 10))[0]} pageId={parseInt(match.params.id, 10)}/> }
          />
          {/* <Route render={() => <MainEmpty />} /> */}
        </Switch>
      </Router>
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
