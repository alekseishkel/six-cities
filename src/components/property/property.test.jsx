import React from 'react';
import renderer from 'react-test-renderer';

import Property from './property.jsx';

it(`SuggestionsList correctly renders after relaunch`, () => {
  const mapContainer = document.createElement(`mapContainer`);
  mapContainer.setAttribute(`id`, `map`);
  document.body.appendChild(mapContainer);

  const tree = renderer.create(
      <Property />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
