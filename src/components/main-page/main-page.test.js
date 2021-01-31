import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import reducer from '../../reducer/reducer';

import {MainPage} from './main-page.jsx';

import offers from '../../mocks/offers';

Enzyme.configure({adapter: new Adapter()});

it(`MainPage correctly renders after relaunch`, () => {
  const store = createStore(reducer);

  const mapContainer = document.createElement(`mapContainer`);
  mapContainer.setAttribute(`id`, `map`);
  document.body.appendChild(mapContainer);

  const tree = shallow(
      <Provider store={store}>
        <Router>
          <MainPage
            currentCity={`Cologne`}
            currentCityOffers={[offers[3], offers[4], offers[5]]}
          />
        </Router>
      </Provider>
  );

  expect(shallowToJson(tree)).toMatchSnapshot();
});
