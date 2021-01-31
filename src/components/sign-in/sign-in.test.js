import React from 'react';
import renderer from 'react-test-renderer';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducer/reducer';

import {SignIn} from './sign-in.jsx';

it(`SignIn correctly renders after relaunch`, () => {
  const store = createStore(reducer);
  const onChangeHandler = jest.fn();

  const tree = renderer.create(
      <Provider store={store}>
        <SignIn
          currentCity={`Cologne`}
          isAuthorized={false}
          onLogin={onChangeHandler}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
