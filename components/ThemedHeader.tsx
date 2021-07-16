import React, { useContext, FC } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";
import {Theme, ThemeContextState} from '../contexts/ThemeContext/types';

export function switchTheme (contextProvider: ThemeContextState) {

    if (contextProvider.theme === Theme.English){
        contextProvider.setTheme(Theme.Portuguese);
    } else {
        contextProvider.setTheme(Theme.English);
    }
}

const ThemedHeader:FC = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div className="h-screen flex justify-center items-center">
            <button
                type="button"
                className="bg-blue-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-blue-600 transition duration-200 each-in-out"
                onClick={() => switchTheme({theme, setTheme})}
            >
                {`${theme}`}
            </button>
        </div>
    );
};

export default ThemedHeader;