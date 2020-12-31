import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../header/header.jsx';
import MainPage from '../main-page/main-page.jsx';
import MainEmpty from '../main-empty/main-empty.jsx';

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

    if (hasError) {
      return <MainEmpty />;
    }

    return (
      <div>
        {<Header isAuthorizationRequired={this.props.isAuthorizationRequired}/>}
        <MainPage func={fn} />
      </div>
    );
  }
}

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: state.userState.isAuthorizationRequired
});

export {App};

export default connect(mapStateToProps)(App);
