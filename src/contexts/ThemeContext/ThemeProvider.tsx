import React, { createContext, useState, FC } from 'react';
import { Theme, ThemeContextType } from '../../types/types';

const contextDefaultValues: ThemeContextType = {
  theme: Theme.English,
  setTheme: (theme) => console.warn(`The theme is ${theme}.`)
};

export const ThemeContext =
  createContext<ThemeContextType>(contextDefaultValues);

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(contextDefaultValues.theme);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
