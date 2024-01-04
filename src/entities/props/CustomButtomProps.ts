import { TextStyle, ViewStyle } from 'react-native';

export type CustomButtonProps = {
  title: string;
  action: () => void;
  isValid: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}
