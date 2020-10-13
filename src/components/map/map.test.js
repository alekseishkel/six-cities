import React from 'react';
import renderer from 'react-test-renderer';

import Map from './map.jsx';

it(`Map correctly renders after relaunch`, () => {
  const mapContainer = document.createElement(`mapContainer`);
  mapContainer.setAttribute(`id`, `map`);
  document.body.appendChild(mapContainer);

  const map = renderer.create(
      <Map />
  ).toJSON();
  expect(map).toMatchSnapshot();
});
