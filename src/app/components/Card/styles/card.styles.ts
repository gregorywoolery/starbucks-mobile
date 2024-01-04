import { StyleSheet } from 'react-native';
import Colors from '../../../config/colors.config';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryGreen,
    borderRadius: 16,
    padding: 20,
    justifyContent: 'space-between'
  },
  cardContentTop: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'inherit'
  },
  cardNumberText: {
    color: Colors.white,
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    marginTop: 8
  },
  mainCardText: {
    color: Colors.white,
    fontSize: 24,
  }
});

export default styles;