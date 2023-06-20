import React from 'react';
import {render} from '@testing-library/react-native';
import {Text} from 'react-native';
import {LayoutContainer} from '../LayoutContainer';
import {SafeAreaProvider} from 'react-native-safe-area-context';

jest.mock('react-native-safe-area-context', () => {
  const inset = {top: 0, right: 0, bottom: 0, left: 0};
  return {
    SafeAreaProvider: jest.fn().mockImplementation(({children}) => children),
    SafeAreaConsumer: jest
      .fn()
      .mockImplementation(({children}) => children(inset)),
    SafeAreaView: jest.fn().mockImplementation(({children}) => children),
    useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
  };
});

const TestChildComponent = () => (
  <Text testID="child-component">Child Component</Text>
);

const renderWithSafeArea = (scrollable?: boolean, loading?: boolean) => {
  return render(
    <SafeAreaProvider>
      <LayoutContainer loading={loading} scrollable={scrollable}>
        <TestChildComponent />
      </LayoutContainer>
    </SafeAreaProvider>,
  );
};
describe('LayoutContainer', () => {
  it('renders children', () => {
    const {getByTestId} = renderWithSafeArea();
    expect(getByTestId('child-component')).toBeTruthy();
  });

  it('renders loading state', () => {
    const {getByTestId} = renderWithSafeArea(false, true);

    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('renders scrollable container when scrollable prop is passed', () => {
    const {getByTestId} = renderWithSafeArea(true);

    expect(getByTestId('scrollable-container')).toBeTruthy();
  });

  it('renders non-scrollable container when scrollable prop is not passed', () => {
    const {getByTestId} = renderWithSafeArea();

    expect(getByTestId('non-scrollable-container')).toBeTruthy();
  });
});
