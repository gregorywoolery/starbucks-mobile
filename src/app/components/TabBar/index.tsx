import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';
import appColors from '../../config/colors.config';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles/TabBar.styles';
import Text from '../Text';

type TabBarProps = {
  ScreenRoute: string;
  Icon: string;
  title: string;
  focused: boolean;
  setCurrentTab;
  navigation;
  iconsize?: number;
}

export default function TabBar({
  ScreenRoute,
  Icon,
  title,
  focused,
  setCurrentTab,
  navigation,
  iconsize,
}: TabBarProps) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(ScreenRoute);
        setCurrentTab(ScreenRoute);
      }}
    >
      <View
        style={{
          ...styles.tabContainer,
        }}
      >
        <MaterialIcons 
          name={focused ? Icon : `${Icon}-outline`} 
          size={iconsize || 26} 
          color={appColors.primaryGreen} 
        />

        {title && (
          <Text 
            textType={ focused ? 'regular' : 'light' }
            style={{
              fontSize: 12
            }}
          >{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

