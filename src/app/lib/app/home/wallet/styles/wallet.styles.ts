import { StyleSheet } from 'react-native';
import Colors from '../../../../../config/colors.config';

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  optionButton: {
    width: 100,
    height: 40,
    backgroundColor: Colors.primaryCyan,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  optionText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    color: Colors.secondaryCyan,
    fontSize: 12,
  },
  cardImageContainer: {
    height: 180,
    shadowRadius: 20,
    shadowOpacity: 0.2,
    padding: 20,
  }
});

export default styles;