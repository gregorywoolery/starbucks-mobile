import React, { useCallback } from 'react';
import StoreManager from '../app/service/store.manager';
import { ColorSchemeType } from '../entities/models/ColorSchemeType';
import { ThemeContextType } from '../entities/props/ThemeContextType';

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: ColorSchemeType.light,
  saveTheme: () => { },
  saveThemeAsDeviceTheme: () => { }
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState<ColorSchemeType>('light');
  
  const storeManager = new StoreManager();

  const saveTheme = useCallback(async (theme: ColorSchemeType) => {
    await storeManager.saveTheme(theme);

    setTheme(theme);
  }, []);

  const saveThemeAsDeviceTheme = useCallback(async () => {
    await storeManager.saveThemeAsDeviceTheme();
  }, []);

  const checkTheme = async () => {
    try {
      const theme = await storeManager.getTheme();
            
      setTheme(theme);
    }
    catch (error) {
      console.error(error);
    }
  };
  
  React.useEffect(() => {
    checkTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{
      theme,
      saveTheme,
      saveThemeAsDeviceTheme
    } as ThemeContextType}>
      {children}
    </ThemeContext.Provider>
  );
}