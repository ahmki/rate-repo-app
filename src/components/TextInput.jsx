import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  errorInput: {
    margin: 7,
    padding: 5,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#d73a4a',
  },
});

const TextInput = ({ style, error, ...props }) => {
  // renders stylesheets error css when the error prop is true, otherwise renders the prop style
  const textInputStyle = error ? styles.errorInput : [style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;