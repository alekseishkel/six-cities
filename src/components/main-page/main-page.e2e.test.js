import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainPage from './main-page.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`App correctly renders after relaunch`, () => {
  const appartmentTypes = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`];

  const clickHandler = jest.fn();
  const app = shallow(
      <MainPage
        appartmentTypes={appartmentTypes} func={clickHandler}
      />
  );

  const headers = app.find(`.place-card__info`);
  headers.forEach((header) => {
    header.simulate(`click`);
  });

  expect(clickHandler).toHaveBeenCalledTimes(5);
});
