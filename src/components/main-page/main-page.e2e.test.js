import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import reducer from '../../reducer/reducer';

import {MainPage} from './main-page.jsx';

import offers from '../../mocks/offers';

Enzyme.configure({adapter: new Adapter()});

it(`A click event is correctly simulated on cards info on the main page`, () => {
  const store = createStore(reducer);
  const mapContainer = global.document.createElement(`mapContainer`);

  mapContainer.setAttribute(`id`, `map`);
  global.document.body.appendChild(mapContainer);

  const clickHandler = jest.fn();

  const mainPage = mount(
      <Provider store={store}>
        <Router>
          <MainPage
            currentCity={`Cologne`}
            currentCityOffers={[offers[3], offers[4], offers[5]]}
          />
        </Router>
      </Provider>
  );
    // дофиксить тесты
  const links = mainPage.find(`.place-card__link`);

  console.log(links);
  links.forEach((link) => {
    link.simulate(`click`);
  });

  expect(clickHandler).toHaveBeenCalledTimes(3);
});
