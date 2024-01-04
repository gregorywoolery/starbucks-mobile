import { TextStyle, ViewStyle } from 'react-native';
import appColors from './colors.config';
import Colors from './colors.config';

const mainStyles = {
  safeViewArea: {
    flex: 1,
  } as ViewStyle,
  appViewContainer: {
    minHeight: '90%',
    padding: 20,
  } as ViewStyle,
  appContentContainer: {
    minHeight: '100%',
    padding: 20,
    paddingTop: 40,
  } as ViewStyle,
  appHeaderContainer: {
    justifyContent: 'center',
    width: '100%',
  } as ViewStyle,
  color: {
    primaryRed: '#FF6464',
    primaryBlue: '#102A43',
    secondaryBlue: '#204060',
    tertiaryBlue: '#43B5F4',
    primaryGreen: '#7BE495',
    secondaryGreen: '#59BB71',
    white: '#fff',
    primaryGrey: '#7C7C7C',
    primaryPurple: '#DC7BE4',
    primaryOrange: '#DCE47B',
    lightBlue: '#54AEC1',
    primaryPink: '#FF6584',
  },
  fontSize16: {
    fontSize: 16,
  },
  fontSize20: {
    fontSize: 20,
  },
  widthFull: {
    width: '100%',
  },
  buttons: {
    mainButton: {
      backgroundColor: Colors.primaryBlue,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
    } as ViewStyle,
    mainButtonText: {
      color: Colors.white,
      fontSize: 16,
    } as ViewStyle,
  },
  errorText: {
    color: appColors.secondaryRed,
    fontSize: 12,
  } as TextStyle,
  test: {
    borderColor: appColors.primaryRed,
    borderWidth: 1,
  } as ViewStyle,
  signUpTextMain: {
    fontSize: 20,
    color: '#fff',
  },
  signUpTextInfo: {
    fontSize: 14,
    marginTop: 20,
    marginBottom: 20,
    color: '#fff',
  },
  appInputContainer: {
    height: '70%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  } as ViewStyle,
  appInputContentContainer: {
    flexDirection: 'column',
    minWidth: '100%',
    width: '100%',
  } as ViewStyle,
  appErrorContainer: {
    marginLeft: 5,
    alignItems: 'flex-start',
  } as ViewStyle,
  nextButton: {
    backgroundColor: appColors.teritiaryGreen,
    borderWidth: 2,
    borderColor: appColors.primaryGreen,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 40,
    borderRadius: 20,
  } as ViewStyle,
};

export default mainStyles;
