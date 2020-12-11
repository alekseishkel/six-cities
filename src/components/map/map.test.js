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
        city={`Paris`}
        zoom={12}
        cityCoords={[48.8680266086781, 2.351173200195321]}
        offers={offers.Paris.offers}
        activeCard={null}
      />
  ).toJSON();

  expect(map).toMatchSnapshot();
});
