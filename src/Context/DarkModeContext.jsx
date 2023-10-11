import { createContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
    const root = window.document.documentElement;
    const [theme, setTheme] = useState(
        localStorage.theme ? localStorage.theme : "light"
    );


    useEffect(() => {
        console.log("ini tema ", theme);
        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            root.classList.add(theme);
        }else {
            root.classList.remove("dark");
        }
    }, [theme]);

    return (
        <DarkModeContext.Provider value={{ theme, setTheme }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;
