import React from 'react';
import AppBar from '../../../../components/AppBar';
import CustomScaffold from '../../../../components/CustomScaffold/CustomScaffold';
import MainScreenView from '../../../../components/MainScreenView/MainScreenView';
import AppAvatar from '../../../../components/AppAvatar';
import CommonVerticalSpacer from '../../../../components/Spacers/CommonVerticalSpacer';
import Text from '../../../../components/Text';
import SettingItem from '../../../../components/SettingItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../../config/colors.config';
import View from '../../../../components/View';
import { ThemeContextType } from '../../../../../entities/props/ThemeContextType';
import { ThemeContext } from '../../../../../context/ThemeContext';
import { ColorSchemeType } from '../../../../../entities/models/ColorSchemeType';
import { Switch } from 'react-native-paper';
import Images from '../../../../config/images.config';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation<any>();
  const {
    theme,
    saveTheme
  }: ThemeContextType = React.useContext(ThemeContext);

  const [isDarkMode, setIsDarkMode] = React.useState(
    theme === ColorSchemeType.light ? false : true
  );

  const handleThemeChange = () => {
    if (theme === ColorSchemeType.light) {
      setIsDarkMode(true);
      saveTheme(ColorSchemeType.dark);
    } else {
      saveTheme(ColorSchemeType.light);
      setIsDarkMode(false);
    }
  };

  return (
    <MainScreenView>
      <CustomScaffold
        customAppBar={
          <AppBar
            navigation={navigation}
            showActions={false}
            showBackButton={false}
          />
        }
      >
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <AppAvatar
            uri={Images.profile_photo}
            profileSize={110}
          />

          <CommonVerticalSpacer height={8} />

          <Text textType='bold' >Gregory Woolery</Text>

          <CommonVerticalSpacer height={4} />

          <Text textType='light'>@gregory</Text>
        </View>

        <CommonVerticalSpacer height={32} />

        <View style={{
          paddingHorizontal: 20
        }}>
          <SettingItem
            title={'My Account'}
            description={'Edit Profile, Change Password'}
            icon={
              <Ionicons name="person-outline" size={20} color={Colors.primaryGreen} />
            }
          />

          <CommonVerticalSpacer height={16} />

          <SettingItem
            title={'Transactions'}
            description={'Payment Method'}
            icon={
              <Ionicons name="card-outline" size={20} color={Colors.primaryGreen} />
            }
          />

          <CommonVerticalSpacer height={16} />

          <SettingItem
            title={'Additional Resources'}
            description={'FAQ, Privacy Policy, Terms & Conditions'}
            icon={
              <Ionicons name="document-text-outline" size={20} color={Colors.primaryGreen} />
            }
          />

          <CommonVerticalSpacer height={16} />

          <SettingItem
            title={'Support Center'}
            description={'Live Chat, Leave a message'}
            icon={
              <Ionicons name="headset-outline" size={20} color={Colors.primaryGreen} />
            }
          />

          <CommonVerticalSpacer height={16} />

          <SettingItem
            title={'Logout'}
            action={() => { }}
            icon={
              <Ionicons name="log-out-outline" size={20} color={Colors.primaryGreen} />
            }
          />

          <View style={{
            paddingHorizontal: 32
          }}>
            <CommonVerticalSpacer height={24} />
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Text>Dark Mode</Text>
              <Switch
                color={Colors.primaryGreen}
                onValueChange={handleThemeChange}
                value={isDarkMode}
              />
            </View>
          </View>

          <CommonVerticalSpacer height={48} />
        </View>
      </CustomScaffold>
    </MainScreenView>
  );
}