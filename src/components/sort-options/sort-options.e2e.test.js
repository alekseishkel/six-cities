import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {SortOptions} from './sort-options.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`A click event is correctly changing state in SortOptions`, () => {
  const wrapper = mount(
      <SortOptions
        sortingOpened={false}
        sorting={`Popular`}
        togglePopup={jest.fn()}
        changeSorting={jest.fn()}
      />);

  const sortingType = wrapper.find(`.places__sorting-type`);
  sortingType.simulate(`click`, {preventDefault() { }});

  const sortingOpenedState = {
    sortingOpened: true
  };

  const state = wrapper.state();

  wrapper.setState({sortingOpenedState}, () => {
    expect(state).toEqual(sortingOpenedState);
  });
});

