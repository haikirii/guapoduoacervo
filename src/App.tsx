import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { Paths } from "./routes";

const App = () =>{
  const [isLogged, setIsLogged] = useState(false);

  return(
    <>
      <AuthContext.Provider value={{isLogged, setIsLogged}}>
        <Paths />
      </AuthContext.Provider>
    </>
  );
}

export default App