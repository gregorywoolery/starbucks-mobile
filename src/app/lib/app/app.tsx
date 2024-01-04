import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import AuthRoutes from './routes/auth.routes';
import { Screens } from '../../config/screens.enum';

export default function AuthNavigation() {
  const Stack = createStackNavigator();

  const screenOptions: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={Screens.MAIN_AUTH_ROUTES} component={AuthRoutes} />
      </Stack.Navigator>
    </>
  );
}