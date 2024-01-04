import { StyleSheet } from 'react-native';
import Colors from '../../../config/colors.config';

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginHorizontal: 20,
    marginTop: 24,
    height: 260,
    width: 150,
    shadowColor: Colors.primaryBlack,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  imageContent: {
    height: 210,
    width: 150,
    alignItems: 'flex-end',
    padding: 12,
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 10,

    backgroundColor: Colors.white,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default styles;