import FormikTextInput from "./FormikTextInput";
import { Formik } from 'formik';
import { View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import * as yup from 'yup';

/* Repeated code should be refactored into theme.js 
(button and textinput) */
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
  container: {
    backgroundColor: 'white',
  },
});

const initialValues = {
  ownerName: '',
  repoName: '',
  rating: '',
  review: ''
};

const reviewValidationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repoName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .min(0, 'Must be more than 0')
    .max(100, 'Must be less than 100')
    .required('Rating is required'),
  review: yup
    .string()
});

const CreateReview = () => {

  const onSubmit = (values) => {
    console.log('lalalala', values);
  };

  return (
    <View style={styles.container}>
      <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={reviewValidationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <FormikTextInput
              name="ownerName"
              placeholder="Repository owner name"
              style={styles.textInput}
            />
            <FormikTextInput
              name="repoName"
              placeholder="Repository name"
              style={styles.textInput}
            />
            <FormikTextInput
              name="rating"
              placeholder="Rating between 0 and 100"
              style={styles.textInput}
            />
            <FormikTextInput
              name="review"
              placeholder="Review"
              style={styles.textInput}
            />
            <Pressable onPress={handleSubmit}>
              <Text style={styles.button} color="textWhite">Create a review</Text>
            </Pressable>
          </>
        )}
      </Formik>
    </View>
  )
}

export default CreateReview;