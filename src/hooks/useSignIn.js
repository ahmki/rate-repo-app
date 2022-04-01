import { useMutation } from "@apollo/client";
import { useApolloClient } from "@apollo/client";
import { AUTHENTICATE } from '../graphql/mutations'
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    const mutationResult = await mutate({
      variables: {
        credentials: {
          username,
          password,
        }
    }});

    const token = mutationResult.data.authenticate.accessToken;
    await authStorage.setAccessToken(token);
    apolloClient.resetStore();

    return mutationResult;
  };

  return [signIn, result];
};

export default useSignIn;