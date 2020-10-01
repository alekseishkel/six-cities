import React from 'react';

import MainPage from '../main-page/main-page.jsx';

const appartmentTypes = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`];

const fn = () => {
  console.log(`fn`);
};

const App = () => {
  return (
    <div>
      <MainPage appartmentTypes={appartmentTypes} func={fn} />
    </div>
  );
};

export default App;
