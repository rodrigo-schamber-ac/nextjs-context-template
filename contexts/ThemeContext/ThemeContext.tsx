import React, { createContext, useState, FC } from "react";
import { Theme, ThemeContextState } from "./types";

const contextDefaultValues: ThemeContextState = {
  theme: Theme.Light,
  setTheme: (theme) => console.warn(`The theme is ${theme}.`)
};

export const ThemeContext = createContext<ThemeContextState>(
  contextDefaultValues
);

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(contextDefaultValues.theme);

  return (
    <ThemeContext.Provider
      value={{
        theme, setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;