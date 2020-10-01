import React from 'react';
import renderer from 'react-test-renderer';

import MainPage from './main-page.jsx';

it(`App correctly renders after relaunch`, () => {
  const appartmentTypes = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`];

  const fn = () => {
  };

  const tree = renderer.create(
      <MainPage
        appartmentTypes={appartmentTypes}
        func={fn}
      />
  );

  expect(tree).toMatchSnapshot();
});
