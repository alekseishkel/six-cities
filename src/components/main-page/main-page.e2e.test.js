import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from '../../reducer';

import {MainPage} from './main-page.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`A click event is correctly simulated on the main page`, () => {
  const store = createStore(reducer);
  const mapContainer = global.document.createElement(`mapContainer`);
  mapContainer.setAttribute(`id`, `map`);
  global.document.body.appendChild(mapContainer);
  const clickHandler = jest.fn();
  const app = mount(
      <Provider store={store}>
        <MainPage
          city={`Paris`}
          func={clickHandler}
        />
      </Provider>
  );

  const headers = app.find(`.place-card__info`);
  headers.forEach((header) => {
    header.simulate(`click`, {preventDefault() { }});
  });

  expect(clickHandler).toHaveBeenCalledTimes(2);
});
