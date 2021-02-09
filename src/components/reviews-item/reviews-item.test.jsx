import React from 'react';
import renderer from 'react-test-renderer';

import ReviewsItem from './reviews-item.jsx';

import reviews from '../../mocks/reviews';

it(`ReviewsItem correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <ReviewsItem
        review={reviews[0]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
