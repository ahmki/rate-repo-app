import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    height: 75,
    paddingBottom: 8,
    backgroundColor: theme.colors.appbarbg,
  },
});


const AppBar = () => {

  const { data } = useQuery(GET_AUTHORIZED_USER);
  const userAuthorized = data ? data.me : undefined;
    
  return (
    <View style={styles.container}>{/* ... */}
      <ScrollView horizontal>
        <AppBarTab tabname="Repositories" link="/" />

        {userAuthorized ? (
          <>
            <AppBarTab tabname="Sign out" link="/signout" />
            <AppBarTab tabname="Create a review" link="/createreview" />
          </>
        ) : (
          <AppBarTab tabname="Sign in" link="/signin" />
        )}
      </ScrollView>
    </View>
  )
};

export default AppBar;