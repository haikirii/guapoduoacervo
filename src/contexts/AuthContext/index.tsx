import { createContext, Dispatch, SetStateAction } from "react";

interface AuthContextType {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);