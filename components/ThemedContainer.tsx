import React, { useContext, FC } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import {Theme} from '../contexts/ThemeContext/types';

const ThemedContainer: FC = ({children}) => {
  const { theme, setTheme } = useContext(ThemeContext);
  function switchTheme (theme: Theme) {
    if (theme === Theme.Dark){
    
      return setTheme(Theme.Light)
    
    } else {
    
      return setTheme(Theme.Dark)
    
    };
  };

  return (
    <div>
      <button onClick={() => switchTheme(theme)}>
        {`The present theme is ${theme}.`}
      </button>
      {children}
    </div>
  );
};

export default ThemedContainer;