import React, { ReactNode, useState } from 'react';

export const ConfigContext = React.createContext<ConfigContextType>({
  isLoading: false,
  setIsLoading: () => {},
});

export function ConfigProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <ConfigContext.Provider
      value={{
        isLoading,
        setIsLoading,
      } as ConfigContextType }
    >
      {children}
    </ConfigContext.Provider>
  );
}

export type ConfigContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
