import { Image, View } from 'react-native';
import React from 'react';
import Colors from '../../config/colors.config';
import Ionicons from 'react-native-vector-icons/Ionicons';

type AppAvatarProps = {
  uri?: any,
  profileSize?: number,
}

export default function AppAvatar({ 
  profileSize, 
  uri 
}: AppAvatarProps) {
  const SIZE = profileSize ?? 35;
  return (
    <View style={{
      marginTop: 8,
      height: SIZE,
      width: SIZE,
      borderRadius: SIZE,
      borderWidth: 1,
      borderColor: Colors.teritiaryGrey,
      marginBottom: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: uri ? 'transparent' : Colors.white
    }}>      
      {
        uri ? (
          <Image
            source={uri}
            resizeMode='contain'
            style={{
              height: SIZE,
              width: SIZE,
              borderRadius: SIZE
            }}
          />
        ) : (
          <Ionicons name='person' size={SIZE-18} color={Colors.teritiaryGrey} />
        )
      }
    </View>
  );
}