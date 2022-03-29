import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  
  // eslint-disable-next-line no-unused-vars
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });
  console.log('repositories', data)
  const repositories = data.repositories
  return { repositories };
  
};

export default useRepositories;