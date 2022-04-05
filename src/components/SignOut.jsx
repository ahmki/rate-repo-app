import { useApolloClient } from '@apollo/client';
import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-native';
import AuthStorageContext from '../contexts/AuthStorageContext';
import Text from './Text';

const SignOut = () => {
  const apollo = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  const navigate = useNavigate();

  const signOutHandler = async () => {
    await authStorage.removeAccessToken();
    await apollo.resetStore();
    navigate('/');
  }

  useEffect(() => {
    signOutHandler();
  }, []);
  
  return (
    <>
      <Text>Logging out...</Text>
    </>
  )
}

export default SignOut;