import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 8,
    backgroundColor: theme.colors.appbarbg,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>{/* ... */}
      <ScrollView horizontal>
        <AppBarTab tabname="Repositories" link="/" />
        <AppBarTab tabname="Sign in" link="/signin" />
      </ScrollView>
    </View>
  )
};

export default AppBar;