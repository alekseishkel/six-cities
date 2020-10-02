import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainPage from './main-page.jsx';

Enzyme.configure({adapter: new Adapter()});

// разобраться с тестом

it(`MainPage correctly renders after relaunch`, () => {
  const clickHandler = jest.fn();
  const app = shallow(
      <MainPage
        func={clickHandler}
      />
  );

  const headers = app.find(`.place-card__info`);
  headers.forEach((header) => {
    header.simulate(`click`);
  });

  expect(clickHandler).toHaveBeenCalledTimes(0);
});
