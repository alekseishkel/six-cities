import React from 'react';
import renderer from 'react-test-renderer';

import {FavoritesButton} from './favorites-button.jsx';

import {createBrowserHistory as history} from 'history';

import offers from '../../mocks/offers';

it(`FavoritesButton correctly renders after relaunch`, () => {

  const tree = renderer.create(
      <FavoritesButton
        cardInfo={offers[0]}
        history={history()}
        isAuthorized={true}
        offers={offers}
        onFavoritesButtonAddClick={jest.fn()}
        onFavoritesButtonRemoveClick={jest.fn()}
        favorites={[offers[0], offers[2], offers[4]]}
        type={`property`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
