import { createContext, useState, useEffect } from "react"

const ScrollContext = createContext();

const ScrollContextProvider = ({children}) => {
    
    const [toTheTop, setToTheTop] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY; // => scroll position
        if (scrollPosition > 0) {
            setToTheTop(true);
        } else {
            setToTheTop(false);
        }
    };
    
    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <ScrollContext.Provider value={toTheTop}>
            {children}
        </ScrollContext.Provider>
    )
}

export const Scroll = ScrollContext;
export default ScrollContextProvider;
