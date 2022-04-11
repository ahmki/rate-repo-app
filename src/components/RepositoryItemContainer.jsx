import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import { View, FlatList, StyleSheet } from "react-native";
import Text from './Text';
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 8,
  }
})

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryItemContainer = () => {
  const { repositoryId } = useParams();
  const { data, loading } = useRepository(repositoryId);
  
  return (
    <View>
      {loading ? 
        <Text>Loading...</Text>
        :
        <FlatList
          data={data.repository.reviews.edges}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item, }) => 
            <ReviewItem review={item} />
          }
          keyExtractor={(item) => item.node.id}
          ListHeaderComponent={() => 
            <RepositoryItem item={data.repository} githubLink={true} />
          }
        />
      } 
      
    </View>
  )
}

export default RepositoryItemContainer;