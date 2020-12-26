import React from 'react';
import renderer from 'react-test-renderer';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducer/reducer';

import {MainPage} from './main-page.jsx';

import offers from '../../mocks/offers';

it(`MainPage correctly renders after relaunch`, () => {
  const store = createStore(reducer);
  const mapContainer = document.createElement(`mapContainer`);
  mapContainer.setAttribute(`id`, `map`);
  document.body.appendChild(mapContainer);

  const tree = renderer.create(
      <Provider store={store}>
        <MainPage
          currentCity={`Paris`}
          func={jest.fn()}
          offers={offers}
          sorting={`Popular`}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
