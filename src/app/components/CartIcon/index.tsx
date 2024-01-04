import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/colors.config';
import { TouchableOpacity } from 'react-native';
import { ColorSchemeType } from '../../../entities/models/ColorSchemeType';

export default function CartIcon({
  theme,
  customColor
}) {
  return (
    <TouchableOpacity>
      <MaterialCommunityIcons
        name='shopping-outline'
        size={24}
        color={
          customColor ? customColor : theme === ColorSchemeType.light ? Colors.primaryGreen : Colors.white
        }        
      />
    </TouchableOpacity>
  );
}