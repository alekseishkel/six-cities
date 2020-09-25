import React from 'react';

import WelcomeScreen from '../welcome-screen/welcome-screen';

const appartmentTypes = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`];

const fn = () => {
};

const App = () => {
  return (
    <div>
      <WelcomeScreen appartmentTypes={appartmentTypes} func={fn} />
    </div>
  );
};

export default App;
