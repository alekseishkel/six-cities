import React from 'react';
import renderer from 'react-test-renderer';

import MainPage from './main-page.jsx';

it(`MainPage correctly renders after relaunch`, () => {

  const tree = renderer.create(
      <MainPage
        func={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
