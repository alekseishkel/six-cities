import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducer/reducer';

import {createBrowserHistory as history} from 'history';

import {CitiesTabs} from './cities-tabs.jsx';

import offers from '../../mocks/offers';

Enzyme.configure({adapter: new Adapter()});

it(`Cities correctly change on click event`, () => {
  const store = createStore(reducer);
  const clickHandler = jest.fn((city) => (city));

  const citiesTabs = mount(
      <Provider store={store}>
        <CitiesTabs
          currentCity={`Cologne`}
          history={history()}
          match={{
            params: {
              city: `Cologne`
            }
          }}
          onCityClick={clickHandler}
          offers={offers}
        />
      </Provider>
  );

  const tabs = citiesTabs.find(`.tabs__item`);
  tabs.forEach((tab) => {
    tab.simulate(`click`);
    expect(clickHandler.mock.results[0].value).toEqual(`Hamburg`);
  });
});
