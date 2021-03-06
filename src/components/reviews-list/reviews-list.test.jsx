import React from 'react';
import renderer from 'react-test-renderer';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducer/reducer';

import {ReviewsList} from './reviews-list.jsx';

import reviews from '../../mocks/reviews';

it(`ReviewsList correctly renders after relaunch`, () => {
  const store = createStore(reducer);

  const tree = renderer.create(
      <Provider store={store}>
        <ReviewsList
          reviews={reviews}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
