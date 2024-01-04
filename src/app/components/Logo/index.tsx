import { Image } from 'react-native';
import React from 'react';
import starbuck_logo from '../../../assets/photos/logo.png';
import View from '../View';
import Text from '../Text';
import { LogoProps } from '../../../entities/props/LogoProps';
import Colors from '../../config/colors.config';
import CommonHorizontalSpacer from '../Spacers/CommonHorizontalSpacer';

export default function Logo({
  fontSize,
  imageSize
}: LogoProps) {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'inherit'
    }}>
      <Image
        style={{
          width: imageSize ?? 20,
          height: imageSize ?? 20,
        }}
        source={starbuck_logo}
      />

      <CommonHorizontalSpacer width={4} />

      <Text
        style={{
          fontSize: fontSize ?? 14,
          fontFamily: 'Poppins-Bold',
          color: Colors.primaryGreen
        }}
      >STARBUCKS</Text>
    </View>
  );
}