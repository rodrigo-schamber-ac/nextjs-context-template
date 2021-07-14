import React, { createContext, useState, FC } from "react";
import { Theme, ThemeContextState } from "./types";

const contextDefaultValues: ThemeContextState = {
  theme: Theme.English,
  setTheme: (theme) => console.warn(`The theme is ${theme}.`)
};

export const ThemeContext = createContext<ThemeContextState>(
  contextDefaultValues
);

export const ThemeConsumer: FC = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => <div>{context.theme}</div>}
    </ThemeContext.Consumer>
  )
};

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