import React from 'react';
import renderer from 'react-test-renderer';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import reducer from '../../reducer/reducer';

import {Favorites} from './favorites.jsx';

import offers from '../../mocks/offers';

it(`Favorites correctly renders after relaunch`, () => {
  const store = createStore(reducer);

  const tree = renderer.create(
      <Provider store={store} >
        <Router>
          <Favorites
            currentCity={`Cologne`}
            favorites={[offers[0], offers[2], offers[4]]}
            onCityClick={jest.fn()}
          />
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
