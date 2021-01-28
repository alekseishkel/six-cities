import React from 'react';
import renderer from 'react-test-renderer';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducer/reducer';

import SuggestionsList from './suggestions-list.jsx';
import offers from '../../mocks/offers';

it(`SuggestionsList correctly renders after relaunch`, () => {
  const store = createStore(reducer);

  const tree = renderer.create(
      <Provider store={store}>
        <SuggestionsList
          func={jest.fn()}
          offers={offers}
          state={{
            city: null,
            sorting: `Popular`,
            activeCard: null,
            isAuthorized: false,
            offers,
            user: null
          }} />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
