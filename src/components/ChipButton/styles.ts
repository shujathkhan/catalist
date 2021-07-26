import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 15,
    paddingTop: 15,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  inActive: {
    backgroundColor: '#F5F5F5',
    color: 'black',
  },
  touchableContainer: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
    margin: 5,
  },
});
