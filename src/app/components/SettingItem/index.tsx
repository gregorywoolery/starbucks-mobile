import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import Text from '../Text';
import Colors from '../../config/colors.config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommonHorizontalSpacer from '../Spacers/CommonHorizontalSpacer';
import CommonVerticalSpacer from '../Spacers/CommonVerticalSpacer';

type SettingItemProps = {
  title: string,
  icon?: React.ReactNode,
  description?: string,
  action?: () => void
}

export default function SettingItem({
  title,
  description,
  icon,
  action
}: SettingItemProps) {
  return (
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.secondaryGrey,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <View style={{
        flexDirection: 'row',
      }}>
        <View style={{
          justifyContent: 'center',
        }}>
          {icon}        
        </View>

        <CommonHorizontalSpacer width={16} />

        <View style={{
          justifyContent: 'center',
        }}>
          <Text textType='bold'>{title}</Text>
          {
            description && (
              <>
                <CommonVerticalSpacer height={4} />
                <Text textType='light' style={{
                  fontSize: 12
                }}>{description}</Text>
              </>
            )
          }
        </View>
      </View>
      <Ionicons 
        name={'chevron-forward-outline'} 
        color={Colors.teritiaryGrey} 
        size={20} 
      />
    </TouchableOpacity>
  );
}