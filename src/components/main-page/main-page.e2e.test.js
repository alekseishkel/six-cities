import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainPage from './main-page.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`MainPage correctly renders after relaunch`, () => {
  const clickHandler = jest.fn();
  const app = mount(
      <MainPage
        func={clickHandler}
      />
  );

  const headers = app.find(`.place-card__info`);
  headers.forEach((header) => {
    header.simulate(`click`, {preventDefault() {}});
  });

  expect(clickHandler).toHaveBeenCalledTimes(4);
});
