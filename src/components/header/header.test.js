import React from 'react';
import renderer from 'react-test-renderer';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducer/reducer';

import Header from './header.jsx';

it(`Header correctly renders after relaunch`, () => {
  const store = createStore(reducer);

  const tree = renderer.create(
      <Provider store={store} >
        <Header
          isAuthorizationRequired={false}
          user={{
            avatarUrl: `/static/avatar/7.jpg`,
            email: `fdsf@gmail.com`,
            id: 1,
            isPro: false,
            name: `fdsf`
          }}
          signIn={jest.fn()}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
