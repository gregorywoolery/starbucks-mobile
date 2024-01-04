import React from 'react';
import { createBottomTabNavigator, BottomTabBarButtonProps, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import TabBar from '../../../components/TabBar';
import { StyleSheet, ViewStyle } from 'react-native';
import HomeMain from './dashboard';
import { ThemeContext } from '../../../../context/ThemeContext';
import { ThemeContextType } from '../../../../entities/props/ThemeContextType';
import { ColorSchemeType } from '../../../../entities/models/ColorSchemeType';
import Colors from '../../../config/colors.config';
import { Screens } from '../../../config/screens.enum';
import Wallet from './wallet';
import Profile from './profile';

const Tab = createBottomTabNavigator();
enableScreens(true);

export default function HomeApp({ navigation }) {
  const [currentTab, setCurrentTab] = React.useState<string>(Screens.HOME_SCREEN);

  const setTabInUse = (tab: string) => {
    setCurrentTab(tab);
  };

  const {
    theme,
  }: ThemeContextType = React.useContext(ThemeContext);

  const screenOptions = {
    headerShown: false,
    tabBarStyle: {
      backgroundColor: theme === ColorSchemeType.light ? Colors.white : Colors.teritiaryGreen,
    },
    style: {
      ...styles.screenOptions,
    } as ViewStyle,
  } as BottomTabNavigationOptions;

  return (
    <Tab.Navigator
      screenOptions={screenOptions}>

      <Tab.Screen
        name={Screens.HOME_SCREEN}
        component={HomeMain}
        options={{
          tabBarButton: (props: BottomTabBarButtonProps) => (
            <TabBar
              ScreenRoute={Screens.HOME_SCREEN}
              title="Home"
              Icon="home"
              focused={currentTab == Screens.HOME_SCREEN}
              setCurrentTab={setTabInUse}
              navigation={navigation}
            />
          ),
        }}
      />

      <Tab.Screen
        name={Screens.WALLET_SCREEN}
        component={Wallet}
        options={{
          tabBarButton: (props: BottomTabBarButtonProps) => (
            <TabBar
              ScreenRoute={Screens.WALLET_SCREEN}
              title="Wallet"
              Icon="wallet"
              focused={currentTab == Screens.WALLET_SCREEN}
              setCurrentTab={setTabInUse}
              navigation={navigation}
            />
          ),
        }}
      />

      <Tab.Screen
        name={Screens.PROFILE_SCREEN}
        component={Profile}
        options={{
          tabBarButton: (props: BottomTabBarButtonProps) => (
            <TabBar
              ScreenRoute={Screens.PROFILE_SCREEN}
              title="Profile"
              Icon="account-circle"
              focused={currentTab == Screens.PROFILE_SCREEN}
              setCurrentTab={setTabInUse}
              navigation={navigation}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screenOptions: {
    height: 90,
    elevation: 0,

    display: 'flex',
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    paddingLeft: 7,
    paddingRight: 26,

    zIndex: 100
  }
});