import React from 'react';
import renderer from 'react-test-renderer';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import reducer from '../../reducer/reducer';

import offers from '../../mocks/offers';
import {OfferCard} from './offer-card.jsx';


it(`OfferCard correctly renders after relaunch`, () => {
  const store = createStore(reducer);

  const tree = renderer.create(
      <Provider store={store} >
        <Router>
          <OfferCard
            cardInfo={offers[0]}
            changeActiveCard={jest.fn()}
            match={{
              url: `/favorites`
            }}
          />
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
