import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { Screens } from '../../../config/screens.enum';
import ItemLobby from '../item-lobby';
import HomeApp from '../home/app';

export default function AuthRoutes() {
  const Stack = createStackNavigator();

  const screenOptions: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={Screens.HOME_APP_SCREEN} component={HomeApp} />
        <Stack.Screen name={Screens.ITEM_LOBBY_SCREEN} component={ItemLobby} />
      </Stack.Navigator>  
    </>
  );
}