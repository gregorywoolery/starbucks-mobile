import { StyleSheet } from 'react-native';
import Colors from '../../../../../config/colors.config';

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  headerSecondaryTextContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchBar: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    paddingRight: 20,
    paddingLeft: 48,
    height: 48,
    width: '100%',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.teritiaryGrey,
  },
  optionTextSelector: {
    paddingLeft: 20,
    color: Colors.teritiaryGrey,
    fontFamily: 'Poppins-SemiBold',
  }
});


export default styles;
