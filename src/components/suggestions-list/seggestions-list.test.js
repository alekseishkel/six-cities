import React from 'react';
import renderer from 'react-test-renderer';

import SuggestionsList from './suggestions-list.jsx';

import nearbyPlaces from '../../mocks/nearbyPlaces';

it(`SuggestionsList correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <SuggestionsList
        isNeighbourhood={true}
        func={jest.fn()}
        places={nearbyPlaces}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});