import React from 'react';
import renderer from 'react-test-renderer';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducer/reducer';

import {BrowserRouter as Router} from 'react-router-dom';

import {App} from './app';

import offers from '../../mocks/offers';

it(`App correctly renders after relaunch`, () => {
  const store = createStore(reducer);

  const mapContainer = document.createElement(`mapContainer`);
  mapContainer.setAttribute(`id`, `map`);
  document.body.appendChild(mapContainer);

  const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <App
            currentCity={`Cologne`}
            offers={offers}
          />
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
