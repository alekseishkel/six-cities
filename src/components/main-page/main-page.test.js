import React from 'react';
import renderer from 'react-test-renderer';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from '../../reducer';

import {MainPage} from './main-page.jsx';

it(`MainPage correctly renders after relaunch`, () => {
  const store = createStore(reducer);
  const mapContainer = document.createElement(`mapContainer`);
  mapContainer.setAttribute(`id`, `map`);
  document.body.appendChild(mapContainer);

  const tree = renderer.create(
      <Provider store={store}>
        <MainPage
          city={`Paris`}
          func={jest.fn()}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
