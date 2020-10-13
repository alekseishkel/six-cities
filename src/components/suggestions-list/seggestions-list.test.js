import React from 'react';
import renderer from 'react-test-renderer';

import SuggestionsList from './suggestions-list.jsx';

it(`SuggestionsList correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <SuggestionsList func={jest.fn()}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
