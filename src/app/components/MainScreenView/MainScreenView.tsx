import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { MainScrenViewProps } from '../../../entities/props/MainScreenViewProps';
import { ThemeContext } from '../../../context/ThemeContext';
import { ThemeContextType } from '../../../entities/props/ThemeContextType';
import { ColorSchemeType } from '../../../entities/models/ColorSchemeType';

export default function MainScreenView({
  children,
  style
}: MainScrenViewProps) {
  const {
    theme
  }: ThemeContextType = React.useContext(ThemeContext);

  return (
    <>
      <StatusBar
        style={style ? style : theme === ColorSchemeType.light ? 'dark' : 'light'}
      />   
      {
        children
      }
    </>
  );
}