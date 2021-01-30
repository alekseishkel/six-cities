import React from 'react';
import renderer from 'react-test-renderer';

import {Map} from './map.jsx';
import offers from '../../mocks/offers';

it(`Map correctly renders after relaunch`, () => {
  const mapContainer = document.createElement(`mapContainer`);
  mapContainer.setAttribute(`id`, `map`);
  document.body.appendChild(mapContainer);

  const map = renderer.create(
      <Map
        activeCard={offers[1]}
        currentCity={`Cologne`}
        offers={offers}
        pageId={1}
      />
  ).toJSON();

  expect(map).toMatchSnapshot();
});
