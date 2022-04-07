import { View, StyleSheet } from "react-native";
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  ratingContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    margin: 5,
  },
  infoContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
    flexShrink: 1,
  }
})

const ReviewItem = ({ review }) => {

  const { text, createdAt, rating, user } = review.node;

  console.log('review', review);
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text color="primary" fontWeight="bold">{rating}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text fontWeight="bold">{user.username}</Text>
        <Text color="textSecondary">{createdAt}</Text>
        <Text>{text}</Text>
      </View>
    </View>
  )
}

export default ReviewItem;