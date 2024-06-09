import React, { createContext, useContext, useState } from "react";

// Definisikan tipe data untuk konteks
interface LoginContextType {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

// buat nilai default
const defaultLoginContext: LoginContextType = {
  isLogin: false,
  setIsLogin: () => {}, // dummy function
};

// Buat konteks
export const LoginContext = createContext<LoginContextType | null>(defaultLoginContext);

// Buat hook kustom untuk mengakses nilai dari konteks
export const useLoginContext = (): LoginContextType => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useTabItemContext must be used within a TabItemProvider");
  }
  return context;
};

// Buat provider yang menyediakan nilai untuk konteks
export const LoginProvider: React.FC = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
