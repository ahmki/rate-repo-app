import FormikTextInput from './FormikTextInput';
import { View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import { Formik } from 'formik';
import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  
  const onSubmit = (values) => {
    console.log('values', values);
  };

  return (

    <View>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry={true}/>
            <Pressable onPress={handleSubmit}>
              <Text style={styles.button} color="textWhite">Sign in</Text>
            </Pressable>
          </>
        )}

      </Formik>
    </View>
  )
};

export default SignIn;