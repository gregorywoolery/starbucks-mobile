import { TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../config/colors.config';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CommonHorizontalSpacer from './Spacers/CommonHorizontalSpacer';
import Text from './Text';


export default function CupSelectionButton({
  name,
  isSelected,
}) {
  return (
    <TouchableOpacity style={{
      flexDirection: 'row',
      backgroundColor: isSelected ? Colors.teritiaryOrange : Colors.primaryCyan,
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 8
    }}>
      <MaterialCommunityIcons
        name={'cup-water'}
        size={18}
        color={isSelected ? Colors.white : Colors.teritiaryOrange}
      />

      <CommonHorizontalSpacer width={8} />

      <Text style={{
        color: isSelected ? Colors.white : Colors.teritiaryOrange,
      }}> 
        {name}
      </Text>
    </TouchableOpacity>
  );
}