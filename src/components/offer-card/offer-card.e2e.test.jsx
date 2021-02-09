import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import reducer from '../../reducer/reducer';

import offers from '../../mocks/offers';
import {OfferCard} from './offer-card.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`OfferCard gets correct data when omMouseEnter on card`, () => {
  const store = createStore(reducer);
  const mouseEnterHandler = jest.fn((id) => id);

  const offerCard = mount(
      <Provider store={store}>
        <Router>
          <OfferCard
            cardInfo={offers[0]}
            changeActiveCard={mouseEnterHandler}
            match={{
              url: `/favorites`
            }}
          />
        </Router>
      </Provider>
  );

  const card = offerCard.find(`.place-card`);

  card.simulate(`mouseenter`);

  expect(mouseEnterHandler.mock.results[0].value).toEqual(offers[0]);
});

it(`OfferCard gets active card equals null when omMouseLeace on card`, () => {
  const store = createStore(reducer);
  const mouseEnterHandler = jest.fn((id) => id);

  const offerCard = mount(
      <Provider store={store} >
        <Router>
          <OfferCard
            cardInfo={offers[0]}
            changeActiveCard={mouseEnterHandler}
            match={{
              url: `/favorites`
            }}
          />
        </Router>
      </Provider>
  );

  const card = offerCard.find(`.place-card`);
  card.simulate(`mouseleave`);
  expect(mouseEnterHandler.mock.results[0].value).toEqual(null);
});


