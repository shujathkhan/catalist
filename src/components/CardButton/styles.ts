import { StyleSheet } from 'react-native';

export const cardStyles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  image: {
    height: 200,
    width: undefined,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  imageStyle: {
    borderRadius: 3,
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {
      width: 3,
      height: 3,
    },
    textShadowRadius: 10,
    textAlign: 'center',
  },
});

export const contentStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 20,
  },
  label: { color: 'grey', fontWeight: 'bold' },
  imageStyle: {
    borderRadius: 3,
  },
  description: {
    color: 'black',
    fontWeight: 'bold',
  },
});
