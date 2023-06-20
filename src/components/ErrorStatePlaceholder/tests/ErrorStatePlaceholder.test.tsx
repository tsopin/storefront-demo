import React from 'react';
import {render} from '@testing-library/react-native';
import {ErrorStatePlaceholder} from '../ErrorStatePlaceholder';

describe('<ErrorStatePlaceholder />', () => {
  it('renders and displays the provided message', () => {
    const testMessage = 'Test error message';
    const {getByText} = render(<ErrorStatePlaceholder message={testMessage} />);

    expect(getByText(testMessage)).toBeDefined();
  });
});
