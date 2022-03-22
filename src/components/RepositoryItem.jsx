import { Text, View } from "react-native";

const RepositoryItem = (props) => {
  console.log('haloo2', props)
  return (
    <View>
      <Text>{props.fullName}</Text>
    </View>
  )
}

export default RepositoryItem;