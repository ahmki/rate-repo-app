import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 8,
    backgroundColor: theme.colors.appbarbg,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>{/* ... */}
      <AppBarTab tabname="Repositories" />
    </View>
  )
};

export default AppBar;