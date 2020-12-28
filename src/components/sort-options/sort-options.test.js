import React from 'react';
import renderer from 'react-test-renderer';

import {SortOptions} from './sort-options.jsx';

it(`SortOptions correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <SortOptions
        sortingOpened={false}
        sorting={`Popular`}
        togglePopup={jest.fn()}
        changeSorting={jest.fn()} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
