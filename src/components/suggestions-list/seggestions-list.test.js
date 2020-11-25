import React from 'react';
import renderer from 'react-test-renderer';

import SuggestionsList from './suggestions-list.jsx';

import offersCardsInfo from '../../mocks/offers';


it(`SuggestionsList correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <SuggestionsList
        isNeighbourhood={true}
        func={jest.fn()}
        places={offersCardsInfo}
        city={`Paris`}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
