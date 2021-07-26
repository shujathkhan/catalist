import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexGrow: 1,
    minHeight: 70,
    flexDirection: 'column',
    alignItems: 'center',
  },
  subCategories: {
    marginTop: -10,
    minHeight: 100,
  },
  products: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
});
