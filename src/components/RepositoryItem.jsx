import { View, StyleSheet, Image, Pressable } from "react-native";
import Text from './Text';
import theme from '../theme';
import RepositoryCountItem from "./RepositoryCountItem";
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  countContainer: {
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
  },
  itemInfoContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  itemTextContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  languageText: {
    backgroundColor: theme.colors.primary,
    padding: 3,
    margin: 1,
    borderRadius: 6,
  },
  avatar: {
    alignSelf: 'flex-start',
    marginRight: 6,
    width: 50,
    height: 50,
  },
  button: {
    backgroundColor: theme.colors.primary,
    margin: 7,
    padding: 8,
    borderRadius: 6,
    textAlign: 'center',
  },
  text: {
    padding: 2,
    margin: 1,
  },
});

const RepositoryItem = ({ item, githubLink }) => {

  const handlePress = () => {
    Linking.openURL(item.url);
  }

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
          <Text testID="repoFullName" style={styles.text} fontWeight="bold">{item.fullName}</Text>
          <Text testID="repoDesc" style={styles.text} color="textSecondary">{item.description}</Text>
          <Text>
            <Text testID="repoLang" color="textWhite" style={styles.languageText}>{item.language}</Text>
        </Text>
        </View>
      </View>
      <View style={styles.countContainer}>
        <RepositoryCountItem count={item.stargazersCount} countName="Stars" />
        <RepositoryCountItem count={item.forksCount} countName="Forks" />
        <RepositoryCountItem count={item.reviewCount} countName="Reviews" />
        <RepositoryCountItem count={item.ratingAverage} countName="Rating" />
      </View>
      {githubLink ?
        <Pressable onPress={handlePress}>
          <Text style={styles.button} color="textWhite">Open in GitHub</Text>
        </Pressable>
        :
        <></>
      }
    </View>
  )
};

export default RepositoryItem;