import {ImageConnection} from 'services/graphql/types';
import {formatPrice} from '../utilities';

describe('formatPrice', () => {
  it('formats a number to a price string', () => {
    expect(formatPrice(123)).toBe('$123.00');
  });

  it('formats a string to a price string', () => {
    expect(formatPrice('123')).toBe('$123.00');
  });

  it('formats a decimal number to a price string', () => {
    expect(formatPrice(123.456)).toBe('$123.46');
  });

  it('formats a decimal string to a price string', () => {
    expect(formatPrice('123.456')).toBe('$123.46');
  });
});
