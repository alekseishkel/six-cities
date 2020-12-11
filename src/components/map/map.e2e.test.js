import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Map} from './map.jsx';
import offers from '../../mocks/offers';

Enzyme.configure({adapter: new Adapter()});

it(`A click event is correctly changing state in Sortoptions`, () => {
  const mapContainer = document.createElement(`mapContainer`);
  mapContainer.setAttribute(`id`, `map`);
  document.body.appendChild(mapContainer);

  const wrapper = mount(
      <Map
        city={`Paris`}
        zoom={12}
        cityCoords={[48.8680266086781, 2.351173200195321]}
        offers={offers.Paris.offers}
        activeCard={null}
      />);

  const expectedState = {
    zoom: 12,
    cityCoords: [48.8680266086781, 2.351173200195321]
  };

  const state = wrapper.state();

  wrapper.setState({expectedState}, () => {
    expect(state).toEqual(expectedState);
  });
});

