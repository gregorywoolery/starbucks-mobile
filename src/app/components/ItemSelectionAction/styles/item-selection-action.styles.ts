import { StyleSheet } from 'react-native';
import Colors from '../../../config/colors.config';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'inherit'
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'inherit',
    justifyContent: 'space-between',
    width: 100,
  },
  actionButton: {
    backgroundColor: Colors.primaryGreen,
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeTextContent: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: Colors.secondaryGreen,
  }
});

export default styles;