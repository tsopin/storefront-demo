import React, {ErrorInfo, ReactNode} from 'react';
import {Text, View} from 'react-native';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return {hasError: true};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View>
          <Text>Rendering error. Please try again later.</Text>
        </View>
      );
    }

    return this.props.children;
  }
}
