import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
import AppNavigation from './app/app';
import { ConfigContext, ConfigContextType } from '../../context/ConfigContext';

export default function MainAppNavigation() {
  const { isLoading }: ConfigContextType = React.useContext(ConfigContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}