import React from 'react';
import renderer from 'react-test-renderer';

import WelcomeScreen from './welcome-screen';

it(`App correctly renders after relaunch`, () => {
  const appartmentTypes = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`];

  const tree = renderer.create(
      <WelcomeScreen
        appartmentTypes={appartmentTypes}
      />
  );

  expect(tree).toMatchSnapshot();
});
