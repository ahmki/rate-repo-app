import { View } from "react-native";
import Text from './Text';

const RepositoryCountItem = ({ count, countName}) => {
  
  const countRounded = 
    count >= 1000 
    ? (count / 1000).toPrecision(3).concat('k') 
    : count

  return (
    <View>
      <Text testID="repoCountItem" fontWeight="bold">
        {countRounded}
      </Text>
      <Text color="textSecondary">{countName}</Text>
    </View>
  )
};

export default RepositoryCountItem;