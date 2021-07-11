import React, { useContext, FC } from "react";
import ThemeProvider, { ThemeContext } from "../contexts/ThemeContext";

const Theme = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <div>
     {mode}
    </div>
  );
};


const App: FC = () =>{
    return (
        <ThemeProvider>
            <Theme />
        </ThemeProvider>
    )
};

export default App;