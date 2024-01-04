export type SettingConfig = 
    '@APP_AUTH_TOKEN' | 
    '@APP_SESSION_TIMEOUT' | 
    '@APP_THEME_USE_SYSTEM' | 
    '@APP_THEME';

export const SettingConfig = {
  APP_AUTH_TOKEN: '@APP_AUTH_TOKEN' as SettingConfig,
  APP_SESSION_TIMEOUT: '@APP_SESSION_TIMEOUT' as SettingConfig,
  APP_THEME_USE_SYSTEM: '@APP_THEME_USE_SYSTEM' as SettingConfig,
  APP_THEME: '@APP_THEME' as SettingConfig,
};
