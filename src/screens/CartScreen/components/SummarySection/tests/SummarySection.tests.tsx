import React from 'react';
import {render} from '@testing-library/react-native';
import {SummarySection} from '../SummarySection';

describe('<SummarySection />', () => {
  it('renders order summary details', () => {
    const {getByText} = render(<SummarySection total={100} />);

    expect(getByText('Order summary')).toBeTruthy();
    expect(getByText('Subtotal')).toBeTruthy();
    expect(getByText('$100.00')).toBeTruthy();
    expect(getByText('Tax')).toBeTruthy();
    expect(getByText('$13.00')).toBeTruthy();
    expect(getByText('Total')).toBeTruthy();
    expect(getByText('$113.00')).toBeTruthy();
  });
});
