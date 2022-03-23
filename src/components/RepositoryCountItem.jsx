import { View } from "react-native";
import Text from './Text';

const RepositoryCountItem = ({ count, countName}) => {
  return (
    <View>
      <Text fontWeight="bold">{count}</Text>
      <Text color="textSecondary">{countName}</Text>
    </View>
  )
};

export default RepositoryCountItem;