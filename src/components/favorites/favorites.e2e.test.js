import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import reducer from '../../reducer/reducer';

import {Favorites} from './favorites.jsx';


import offers from '../../mocks/offers';

Enzyme.configure({adapter: new Adapter()});

it(`On city name click pass the correct data on favorites page`, () => {
  const store = createStore(reducer);
  const clickHandler = jest.fn((city) => (city));

  const favorites = mount(
      <Provider store={store} >
        <Router>
          <Favorites
            currentCity={`Cologne`}
            favorites={[offers[0], offers[2], offers[4]]}
            onCityClick={clickHandler}
          />
        </Router>
      </Provider>
  );

  const citiesNames = favorites.find(`.locations__item-link`);
  citiesNames.at(0).simulate(`click`);
  expect(clickHandler.mock.results[0].value).toEqual(`Hamburg`);
});
