import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';

it(`App correctly renders after relaunch`, () => {
  const mapContainer = document.createElement(`mapContainer`);
  mapContainer.setAttribute(`id`, `map`);
  document.body.appendChild(mapContainer);

  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});
