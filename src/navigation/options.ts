import {StackNavigationOptions} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import {Palette} from '../styles/colors';

const styles = StyleSheet.create({
  header: {
    backgroundColor: Palette.Background,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export const BaseScreenOptions: StackNavigationOptions = {
  headerShown: false,
  cardOverlayEnabled: true,
  headerBackTitle: 'Back',
  headerTitleStyle: styles.headerTitle,
  headerStyle: styles.header,
};

export const ModalScreenOptions: StackNavigationOptions = {
  ...BaseScreenOptions,
  presentation: 'modal',
  cardStyle: {
    backgroundColor: 'transparent',
  },
};
