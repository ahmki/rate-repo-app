import { View } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';

const AppBarTab = ({ tabname, link }) => {
  return (
    <View>
      <Link to={link}>
        <Text color="textWhite" fontsize="subheading" fontWeight="bold">{tabname}</Text>
      </Link>
    </View>
  )
};

export default AppBarTab;