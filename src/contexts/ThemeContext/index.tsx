import { createContext, ReactNode } from "react";
import React from "react";
import { useState } from "react";

export const ThemeContext = createContext<any>({ theme: 'serpia', undefined});

export const ThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {

  const [theme, setTheme] = useState('serpia');

  return <ThemeContext.Provider value={{theme, setTheme}}>
    {children}
  </ThemeContext.Provider>
}