import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../config/colors.config';
import { CustomButtonProps } from '../../../entities/props/CustomButtomProps';

export default function Button({
  title,
  action,
  isValid,
  style,
  textStyle
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      disabled={!isValid}
      onPress={action}
      style={{
        ...styles.button,
        opacity: isValid ? 1 : 0.5,
        ...style
      }}>
      <Text style={{
        ...styles.text,
        ...textStyle,
      }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primaryGreen,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
  }
});