import { ColorSchemeType } from '../models/ColorSchemeType';

export type ThemeContextType = {
  theme: string;
  saveTheme: (theme: ColorSchemeType) => void;
  saveThemeAsDeviceTheme: () => void;
}
