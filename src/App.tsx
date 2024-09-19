import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { Paths } from "./routes";
import { ThemeProvider } from "./contexts/ThemeContext";
import './styles/index.scss';

const App = () =>{
  const [isLogged, setIsLogged] = useState(false);

  return(
    <>
    <ThemeProvider>
      <AuthContext.Provider value={{isLogged, setIsLogged}}>
          <Paths />
        </AuthContext.Provider>
    </ThemeProvider>
      
    </>
  );
}

export default App