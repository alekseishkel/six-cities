import React from 'react';
import renderer from 'react-test-renderer';

import ReviewsItem from './reviews-item.jsx';

it(`ReviewsItem correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <ReviewsItem />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
