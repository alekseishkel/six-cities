import React from 'react';

import MainPage from '../main-page/main-page.jsx';
import Property from '../property/property.jsx';

const fn = () => {
};

const App = () => {
  return (
    <div>
      <MainPage func={fn} />
      <Property />
    </div>
  );
};

export default App;
