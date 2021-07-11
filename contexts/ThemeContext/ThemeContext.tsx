import React, { createContext, useState, FC } from "react";
import { ThemeContextState } from "./types";

const contextDefaultValues: ThemeContextState = {
  mode: "light"
};

export const ThemeContext = createContext<ThemeContextState>(
  contextDefaultValues
);

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<string>(contextDefaultValues.mode);

  return (
    <ThemeContext.Provider
      value={{
        mode: theme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;