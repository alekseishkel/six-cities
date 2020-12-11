import React, {Component} from 'react';

import MainPage from '../main-page/main-page.jsx';
import Property from '../property/property.jsx';
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
        <MainPage func={fn} />
        <Property />
      </div>
    );
  }
}

export default App;
