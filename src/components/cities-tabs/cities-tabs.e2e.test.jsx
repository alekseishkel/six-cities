import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducer/reducer';

import CitiesTabs from './cities-tabs.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Cities correctly change on click event`, () => {
  const store = createStore(reducer);
  const clickHandler = jest.fn((city) => (city));

  const citiesTabs = shallow(
      <Provider store={store}>
        <CitiesTabs
          city={`Paris`}
          onCityClick={clickHandler}
        />
      </Provider>
  );

  const tabs = citiesTabs.find(`.tabs__item`);
  tabs.forEach((tab) => {
    tab.simulate(`click`);
    expect(clickHandler.mock.results[0].value).toEqual(`Paris`);
  });
});
