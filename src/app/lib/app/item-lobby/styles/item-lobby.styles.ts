import { StyleSheet } from 'react-native';
import Colors from '../../../../config/colors.config';

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: 'inherit'
  },
  imagesContainer: {
    flexDirection: 'row',
    backgroundColor: 'inherit'
  },
  mainText: {
    fontSize: 26,
    fontFamily: 'Poppins-Bold',
    color: Colors.secondaryGreen,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'inherit'
  }   
});

export default styles;