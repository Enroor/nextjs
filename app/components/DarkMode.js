import react, { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    const theme = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className={darkMode ? 'dark' : 'light'}>
            <div className="cursor-pointer" onClick={theme}>{darkMode ? <MoonIcon strokeWidth={2} className="h-6 w-6 text-amber-200"/> : <SunIcon strokeWidth={2} className="h-6 w-6 text-amber-500"/>}</div>
        </div>
    );
}

export default DarkMode;
