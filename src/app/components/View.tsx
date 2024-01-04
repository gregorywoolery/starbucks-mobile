import React from 'react';
import { View as ReactView } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeContextType } from '../../entities/props/ThemeContextType';
import { ColorSchemeType } from '../../entities/models/ColorSchemeType';
import Colors from '../config/colors.config';
import { CustomViewProps } from '../../entities/props/CustomViewProps';

export default function View({
  children,
  style,
}: CustomViewProps) {

  const {
    theme,
  }: ThemeContextType = React.useContext(ThemeContext);

  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <ReactView
      style={[
        { 
          backgroundColor: theme === ColorSchemeType.light ? 
            'transparent' : Colors.teritiaryGreen, 
          ...passedStyles 
        }]}
    >
      {children}
    </ReactView>
  );
}