import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {createBrowserHistory as history} from 'history';

import {FavoritesButton} from './favorites-button.jsx';

import offers from '../../mocks/offers';

Enzyme.configure({adapter: new Adapter()});

it(`On bookmark click pass the correct data on favorites-button page when offer isn't favorite`, () => {
  const clickHandler = jest.fn((city) => (city));

  const favoritesButton = mount(
      <FavoritesButton
        cardInfo={offers[0]}
        history={history()}
        isAuthorized={true}
        offers={offers}
        onFavoritesButtonAddClick={clickHandler}
        onFavoritesButtonRemoveClick={clickHandler}
        favorites={[offers[0], offers[2], offers[4]]}
        type={`property`}
      />
  );

  const citiesNames = favoritesButton.find(`.property__bookmark-button`);
  citiesNames.at(0).simulate(`click`);
  expect(clickHandler.mock.results[0].value).toEqual(offers[0]);
});

it(`On bookmark click pass the correct data on favorites-button page when offer is favorite`, () => {
  const clickHandler = jest.fn((city) => (city));

  const favoritesButton = mount(
      <FavoritesButton
        cardInfo={offers[0]}
        history={history()}
        isAuthorized={true}
        offers={offers}
        onFavoritesButtonAddClick={clickHandler}
        onFavoritesButtonRemoveClick={clickHandler}
        favorites={[offers[0], offers[2], offers[4]]}
        type={`property`}
      />
  );

  const citiesNames = favoritesButton.find(`.property__bookmark-button`);
  citiesNames.at(0).simulate(`click`);
  expect(clickHandler.mock.results[0].value).toEqual(1);
});
