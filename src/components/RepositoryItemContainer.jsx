import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import { View } from "react-native";
import Text from './Text';
import RepositoryItem from "./RepositoryItem";

const RepositoryItemContainer = () => {
  const { repositoryId } = useParams();
  const { data, loading } = useRepository(repositoryId);

  return (
    <View>
      {loading ? 
        <Text>Loading...</Text>
        :
        <RepositoryItem item={data.repository} githubLink={true} />
      } 
      
    </View>
  )
}

export default RepositoryItemContainer;