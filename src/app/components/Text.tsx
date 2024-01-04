import React from 'react';
import { StyleSheet, Text as ReactText } from 'react-native';
import appColors from '../config/colors.config';
import { CustomTextProps } from '../../entities/props/CustomTextProps';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeContextType } from '../../entities/props/ThemeContextType';
import { ColorSchemeType } from '../../entities/models/ColorSchemeType';
import Colors from '../config/colors.config';

export default function Text({
  children,
  textType,
  style,
}: CustomTextProps) {

  const {
    theme,
  }: ThemeContextType = React.useContext(ThemeContext);
 
  textType = textType ?? 'regular';

  const textStyle = styles[textType];

  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <ReactText
      style={[textStyle, { color: theme === ColorSchemeType.light ? appColors.teritiaryGreen : Colors.white, ...passedStyles }]}
    >
      {children}
    </ReactText>
  );
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'Poppins-Regular',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
  light: {
    fontFamily: 'Poppins-Light',
  },
});
