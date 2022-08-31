import React from 'react';
import {render} from '@testing-library/react-native';
import List from '../List';

describe('@components/List', () => {
  it('render list component', () => {
    const component = () =>
      render(
        <List
          name="Zakky Muhammad Fajar"
          photo="https://www.helpforenglish.cz/files/wiki.jpeg"
          onPress={() => jest.fn()}
        />,
      );

    const {toJSON} = component();
    expect(toJSON()).toMatchSnapshot();
  });
});
