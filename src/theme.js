import { Platform } from "react-native-web";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textWhite: '#ffffff',
    primary: '#0366d6',
    appbarbg: '#24292e'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    font: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;