import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {SignIn} from './sign-in.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Sign-in component pass correct data on submit`, () => {
  const onSubmitHandler = jest.fn((city) => (city));

  const signIn = mount(
      <SignIn
        currentCity={`Cologne`}
        isAuthorized={false}
        onLogin={onSubmitHandler}
      />
  );

  signIn.setState({
    email: `alex@mail.ru`,
    password: 123
  });

  const signInForm = signIn.find(`.login__form`);
  signInForm.at(0).simulate(`submit`);

  expect(onSubmitHandler.mock.results[0].value).toEqual(`alex@mail.ru`);
});
