import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import offers from '../../mocks/offers';
import {OfferCard} from './offer-card.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`OfferCard gets correct data when omMouseEnter on card`, () => {
  const mouseEnterHandler = jest.fn((id) => id);
  const offerCard = mount(
      <OfferCard
        func={jest.fn()}
        cardInfo={offers[0]}
        currentActiveCard={mouseEnterHandler}
      />
  );

  const card = offerCard.find(`.place-card`);

  card.simulate(`mouseenter`);
  // console.log(mouseEnterHandler.mock.results[0].value);
  expect(mouseEnterHandler.mock.results[0].value).toEqual(offers[0]);
});

it(`OfferCard gets active card equals null when omMouseLeace on card`, () => {
  const mouseEnterHandler = jest.fn((id) => id);
  const offerCard = mount(
      <OfferCard
        func={jest.fn()}
        cardInfo={offers[0]}
        currentActiveCard={mouseEnterHandler}
      />
  );

  const card = offerCard.find(`.place-card`);
  card.simulate(`mouseleave`);
  expect(mouseEnterHandler.mock.results[0].value).toEqual(null);
});


