import React from 'react';
import renderer from 'react-test-renderer';

import ReviewsList from './reviews-list.jsx';

it(`OfferPage correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <ReviewsList />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
