import React from 'react';
import renderer from 'react-test-renderer';

import {CitiesTabs} from './cities-tabs.jsx';

it(`Cities tabs correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <CitiesTabs
        city={`Paris`}
        onCityClick={jest.fn()}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
