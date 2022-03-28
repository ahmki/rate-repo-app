import { View, StyleSheet } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  tab: {
    paddingLeft: 5,
    paddingRight: 8,
  },
});

const AppBarTab = ({ tabname, link }) => {
  return (
    <View>
      <Link to={link}>
        <Text color="textWhite" fontsize="subheading" fontWeight="bold" style={styles.tab}>{tabname}</Text>
      </Link>
    </View>
  )
};

export default AppBarTab;