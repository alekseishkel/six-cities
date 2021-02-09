import React from 'react';
import renderer from 'react-test-renderer';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import reducer from '../../reducer/reducer';

import {Property} from './property.jsx';

import offers from '../../mocks/offers';

it(`Property correctly renders after relaunch`, () => {
  const store = createStore(reducer);

  const mapContainer = document.createElement(`mapContainer`);
  mapContainer.setAttribute(`id`, `map`);
  document.body.appendChild(mapContainer);

  const match = {
    params: {
      id: 5
    }
  };

  const tree = renderer.create(
      <Provider store={store} >
        <Router>
          <Property
            activeCard={offers[0]}
            changeActiveCard={jest.fn()}
            currentCity={`Cologne`}
            currentCityOffers={[offers[3], offers[4], offers[5]]}
            loadReviews={jest.fn()}
            match={match}
            offers={offers}
            pageId={5}
          />
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
