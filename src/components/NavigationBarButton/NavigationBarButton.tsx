import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Spacing} from 'styles/utilities';

interface NavigationBarButtonProps {
  title: string;
  onPress: () => void;
}

export const NavigationBarButton = ({
  title,
  onPress,
}: NavigationBarButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{paddingRight: Spacing.Small}}>{title}</Text>
    </TouchableOpacity>
  );
};
