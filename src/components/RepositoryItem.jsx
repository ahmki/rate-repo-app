import { View, StyleSheet, Image } from "react-native";
import Text from './Text';
import theme from '../theme';
import RepositoryCountItem from "./RepositoryCountItem";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  countContainer: {
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
  },
  itemInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  itemTextContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  languageText: {
    backgroundColor: theme.colors.primary,
    padding: 3,
    borderRadius: 10,
  },
  avatar: {
    alignSelf: 'flex-start',
    width: 50,
    height: 50,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemInfoContainer}>
        <Image 
          style={styles.avatar}
          source={{
          uri: item.ownerAvatarUrl
          }} 
        />
        <View style={styles.itemTextContainer}>
          <Text fontWeight="bold">{item.fullName}</Text>
          <Text color="textSecondary">{item.description}</Text>
          <Text>
            <Text color="textWhite" style={styles.languageText}>{item.language}</Text>
        </Text>
        </View>
      </View>
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