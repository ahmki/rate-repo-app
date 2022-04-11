import { View, FlatList, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const onPressHandler = ({ id }) => {
    navigate(`/repository/${id}`);
  }

  return (
    <View>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item,  }) => ( 
          <Pressable onPress={() => onPressHandler(item)}>
            <RepositoryItem item={item} githubLink={false} />
          </Pressable>
        )}
      />
    </View>
  )
}

export default RepositoryListContainer;