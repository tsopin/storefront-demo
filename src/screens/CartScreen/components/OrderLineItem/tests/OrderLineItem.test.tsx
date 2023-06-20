import React from 'react';
import {render} from '@testing-library/react-native';
import {OrderLineItem} from '../OrderLineItem';
import {typography} from 'styles/typography';
import {Palette} from 'styles/colors';

describe('<OrderLineItem />', () => {
  it('renders with the title and value', () => {
    const {getByText} = render(<OrderLineItem title="Test Item" value={100} />);

    expect(getByText('Test Item')).toBeTruthy();
    expect(getByText('$100.00')).toBeTruthy();
  });

  it('applies styles based on the isTotal prop', () => {
    const {getByText, rerender} = render(
      <OrderLineItem title="Test Item" value={100} isTotal={true} />,
    );

    const title = getByText('Test Item');
    const value = getByText('$100.00');
    expect(title.props.style).toEqual([
      typography.title3,
      {color: Palette.TextPrimary},
    ]);
    expect(value.props.style).toEqual([
      typography.title3,
      {color: Palette.TextPrimary},
    ]);

    rerender(<OrderLineItem title="Test Item" value={100} isTotal={false} />);
    expect(title.props.style).toEqual([
      typography.body,
      {color: Palette.TextPrimary},
    ]);
    expect(value.props.style).toEqual([
      typography.body,
      {color: Palette.TextPrimary},
    ]);
  });
});
