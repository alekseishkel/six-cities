import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from '../../reducer/reducer';

import {MainPage} from './main-page.jsx';

import offers from '../../mocks/offers';

Enzyme.configure({adapter: new Adapter()});

it(`A click event is correctly simulated on the main page`, () => {
  const store = createStore(reducer);
  const mapContainer = global.document.createElement(`mapContainer`);
  mapContainer.setAttribute(`id`, `map`);
  global.document.body.appendChild(mapContainer);
  const clickHandler = jest.fn();
  const mainPage = mount(
      <Provider store={store}>
        <MainPage
          city={`Paris`}
          func={clickHandler}
          offers={offers}
          sorting={`Popular`}
        />
      </Provider>
  );

  const headers = mainPage.find(`.place-card__info`);
  headers.forEach((header) => {
    header.simulate(`click`, {preventDefault() { }});
  });

  expect(clickHandler).toHaveBeenCalledTimes(2);
});
