import{createContext,useState} from "react";

export const NavBarContext = createContext({
    alt: false,
    setAlt: () => null,
});

export  const NavBarProvider = ({children}) => {
    const [alt, setAlt] = useState(true);
    const value = {alt, setAlt};
    return (
        <NavBarContext.Provider value={value}>
            {children}
        </NavBarContext.Provider>
    );
}