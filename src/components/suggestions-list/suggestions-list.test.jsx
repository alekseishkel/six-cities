import React from 'react';
import renderer from 'react-test-renderer';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import reducer from '../../reducer/reducer';

import {SuggestionsList} from './suggestions-list.jsx';
import offers from '../../mocks/offers';

it(`SuggestionsList correctly renders after relaunch`, () => {
  const store = createStore(reducer);

  const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <SuggestionsList
            offers={offers}
            state={
              {
                userState: {
                  activeCard: offers[0],
                  city: `Paris`,
                  isAuthorized: true,
                  sorting: `Popular`}
              }
            } />
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
