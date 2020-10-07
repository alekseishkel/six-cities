import React from 'react';
import renderer from 'react-test-renderer';

import SuggestionsList from './suggestions-list.jsx';

it(`SuggestionsList gets click`, () => {
  const tree = renderer.create(
      <SuggestionsList func={jest.fn()}/>
  );

  expect(tree).toMatchSnapshot();
});
