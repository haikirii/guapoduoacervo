import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextType {
  isLogged: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook customizado para usar o contexto de forma tipada
export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};