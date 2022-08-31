import React from 'react';
import {render} from '@testing-library/react-native';
import Avatar from '../Avatar';

describe('@components/Avatar', () => {
  it('render avatar component', () => {
    const component = () =>
      render(<Avatar source="https://www.helpforenglish.cz/files/wiki.jpeg" />);

    const {toJSON} = component();
    expect(toJSON()).toMatchSnapshot();
  });

  it('render default avatar', () => {
    const component = () => render(<Avatar source="N/A" />);

    const {toJSON} = component();
    expect(toJSON()).toMatchSnapshot();
  });
});
