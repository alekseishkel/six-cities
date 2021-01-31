import React from 'react';
import renderer from 'react-test-renderer';

import {ReviewForm} from './review-form.jsx';

import reviews from '../../mocks/reviews';

it(`Property correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <ReviewForm
        onSubmit={jest.fn()}
        reviews={reviews}
        user={{
          avatarUrl: `/static/avatar/7.jpg`,
          email: `alex@gmail.com`,
          id: 1,
          isPro: false,
          name: `Alex`
        }}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
