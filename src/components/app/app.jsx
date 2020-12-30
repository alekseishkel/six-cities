import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../header/header.jsx';
import MainPage from '../main-page/main-page.jsx';
import Property from '../property/property.jsx';
import MainEmpty from '../main-empty/main-empty.jsx';

import Loader from '../loader/loader.jsx';

const fn = () => {
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false
    };
  }

  render() {
    const {hasError} = this.state;

    if (this.props.reviews === null) {
      return <Loader />;
    }

    if (hasError) {
      return <MainEmpty />;
    }

    return (
      <div>
        {<Header isAuthorizationRequired={this.props.isAuthorizationRequired}/>}
        <MainPage func={fn} />
        <Property />
      </div>
    );
  }
}

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  reviews: state.data.reviews,
  isAuthorizationRequired: state.userState.isAuthorizationRequired
});

export {App};

export default connect(mapStateToProps)(App);
