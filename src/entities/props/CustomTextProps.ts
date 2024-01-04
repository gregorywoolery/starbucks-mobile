import { TextStyle } from 'react-native';

export type CustomTextProps = {
  children?: React.ReactNode;
  style?: TextStyle | TextStyle[];
  textType?: 'regular' | 'bold' | 'light';
}