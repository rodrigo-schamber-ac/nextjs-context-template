import React, { useContext, FC } from "react";
import ThemeProvider from "../contexts/ThemeContext";
import ThemedContainer from "./ThemedContainer";

const App: FC = () => {
    return (
        <ThemeProvider>
            <ThemedContainer />
        </ThemeProvider>
    )
};

export default App;