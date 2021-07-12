import React, { useContext, FC } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";
import {Theme} from '../contexts/ThemeContext/types';

const ThemedHeader:FC = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    function switchTheme (theme: Theme) {
        
        if (theme === Theme.English){
        
            setTheme(Theme.Portuguese)
        
        } else {
        
            setTheme(Theme.English)
        
        };

    };
    return (
        <div className="h-screen flex justify-center items-center">
            <button
                type="button"
                className="bg-blue-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-blue-600 transition duration-200 each-in-out"
                onClick={() => switchTheme(theme)}
            >
                {`${theme}.`}
            </button>
        </div>
    );
};

export default ThemedHeader;