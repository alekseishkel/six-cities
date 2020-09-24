import React from 'react';

import WelcomeScreen from './welcome-screen';

const appartmentTypes = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`];

const App = () => {
  return (
    <div>
      <WelcomeScreen appartmentTypes={appartmentTypes}/>
    </div>
  );
};

export default App;
