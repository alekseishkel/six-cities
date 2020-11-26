import React from 'react';
import renderer from 'react-test-renderer';

import {CitiesTabs} from './cities-tabs.jsx';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <CitiesTabs />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
