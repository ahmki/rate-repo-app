import { View, Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = ({ tabname }) => {
  return (
    <View>
      <Pressable onPress={() => console.log('pressed')}>
        <Text color="textWhite" fontsize="subheading" fontWeight="bold">{tabname}</Text>
      </Pressable>
    </View>
  )
};

export default AppBarTab;