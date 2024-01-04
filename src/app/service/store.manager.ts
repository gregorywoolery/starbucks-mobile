import asyncStorage from '@react-native-async-storage/async-storage';
import { ColorSchemeType } from '../../entities/models/ColorSchemeType';
import { useColorScheme } from 'react-native';
import { SettingConfig } from '../config/settings.config';

export default class StoreManager {
  constructor() { }

  async getTheme(): Promise<ColorSchemeType> {
    const isSystemTheme = await asyncStorage
      .getItem(SettingConfig.APP_THEME_USE_SYSTEM);

    if (isSystemTheme) {
      const systemTheme = useColorScheme();

      if (systemTheme === 'dark') {
        return ColorSchemeType.dark;
      } else {
        return ColorSchemeType.light;
      }
    } else {
      const theme = await asyncStorage
        .getItem(SettingConfig.APP_THEME);

      if (theme) {
        return theme as ColorSchemeType;
      } else {
        return ColorSchemeType.light;
      } 
    }
  }

  async saveTheme(theme: ColorSchemeType) {
    await asyncStorage
      .setItem(SettingConfig.APP_THEME, theme);
  }

  async saveThemeAsDeviceTheme() {
    await asyncStorage
      .setItem(SettingConfig.APP_THEME_USE_SYSTEM, 'true');
  }
}