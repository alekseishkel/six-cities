import React from 'react';
import renderer from 'react-test-renderer';

import {createBrowserHistory as history} from 'history';

import {CitiesTabs} from './cities-tabs.jsx';

import offers from '../../mocks/offers';

it(`Cities tabs correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <CitiesTabs
        currentCity={`Hamburg`}
        history={history()}
        match={{
          params: {
            city: `Cologne`
          }
        }}
        onCityClick={jest.fn()}
        offers={offers}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
