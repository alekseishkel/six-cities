import React from 'react';
import renderer from 'react-test-renderer';

import offers from '../../mocks/offers';
import {OfferCard} from './offer-card.jsx';

it(`OfferPage correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <OfferCard
        func={jest.fn()}
        cardInfo={offers[0]}
        currentActiveCard={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
