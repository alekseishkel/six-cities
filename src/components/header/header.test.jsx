import React from 'react';
import renderer from 'react-test-renderer';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import reducer from '../../reducer/reducer';

import {Header} from './header.jsx';

it(`Header correctly renders after relaunch`, () => {
  const store = createStore(reducer);

  const tree = renderer.create(
      <Provider store={store} >
        <Router>
          <Header
            currentCity={`Cologne`}
            isAuthorized={false}
            user={{
              avatarUrl: `/static/avatar/7.jpg`,
              email: `alex@gmail.com`,
              id: 1,
              isPro: false,
              name: `Alex`
            }}
          />
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
