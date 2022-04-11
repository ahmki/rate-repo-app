import FormikTextInput from './FormikTextInput';
import { View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import { Formik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    margin: 7,
    padding: 8,
    borderRadius: 6,
    textAlign: 'center',
  },
  textInput: {
    margin: 7,
    padding: 5,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'grey',
  },
});

const initialValues = {
  username: '',
  password: '',
};

const signInValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate(); 

  const onSubmit = async (values) => {

    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log('result', data);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (

    <View>
      <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit}
        validationSchema={signInValidationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <FormikTextInput 
              name="username" 
              placeholder="Username" 
              style={styles.textInput}
            />
            <FormikTextInput 
              name="password" 
              placeholder="Password" 
              secureTextEntry={true}
              style={styles.textInput}
            />
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