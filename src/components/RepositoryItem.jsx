import { View, StyleSheet, Image } from "react-native";
import Text from './Text';
import theme from '../theme';
import RepositoryCountItem from "./RepositoryCountItem";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  countContainer: {
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
  },
  languageText: {
    backgroundColor: theme.colors.primary,
  },
  avatar: {
    alignSelf: 'flex-start',
    width: 55,
    height: 55,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.avatar}
        source={{
          uri: item.ownerAvatarUrl
        }} 
      />
      <Text fontWeight="bold">{item.fullName}</Text>
      <Text color="textSecondary">{item.description}</Text>
      <Text color="textWhite" style={styles.languageText}>{item.language}</Text>
      <View style={styles.countContainer}>
        <RepositoryCountItem count={item.stargazersCount} countName="Stars" />
        <RepositoryCountItem count={item.forksCount} countName="Forks" />
        <RepositoryCountItem count={item.reviewCount} countName="Reviews" />
        <RepositoryCountItem count={item.ratingAverage} countName="Rating" />
      </View>
    </View>
  )
};

export default RepositoryItem;