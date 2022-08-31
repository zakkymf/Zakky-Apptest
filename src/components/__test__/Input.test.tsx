import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Input from '../Input';

describe('@components/Input', () => {
  it('render input component', () => {
    const component = () =>
      render(
        <Input value="" label="First Name" onChangeText={() => jest.fn()} />,
      );

    const {toJSON} = component();
    expect(toJSON()).toMatchSnapshot();
  });

  it('user input correctly', () => {
    const {queryByTestId} = render(
      <Input value="123" label="First Name" onChangeText={() => jest.fn()} />,
    );

    const input: any = queryByTestId('input');
    fireEvent.changeText(input, '123');
    expect(input.props.value).toBe('123');
  });
});
