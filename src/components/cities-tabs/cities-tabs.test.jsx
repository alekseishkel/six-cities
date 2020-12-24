import React from 'react';
import renderer from 'react-test-renderer';

import {CitiesTabs} from './cities-tabs.jsx';

it(`Cities tabs correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <CitiesTabs
        cities={[`Hamburg`, `Paris`, `Cologne`, `Dusseldorf`, `Brussels`, `Amsterdam`]}
        currentCity={`Hamburg`}
        onCityClick={jest.fn()}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
