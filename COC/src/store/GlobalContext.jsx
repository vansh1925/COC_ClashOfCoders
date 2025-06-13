import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();				//CREATE

export function GlobalProvider({ children }) {			//PROVIDE 
    const [isWeb3Mode, setIsWeb3Mode] = useState(false);	

  return (
    <GlobalContext.Provider value={{ isWeb3Mode, setIsWeb3Mode }}>		
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
}