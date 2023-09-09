import React, { useContext, useState } from "react";
import { createContext } from "react";

const AuthContext = createContext({
  authData: null,
  setAuthData: () => {},
});

const AuthContextProvider = ({children}) => {
  const [authData, setAuthData] = useState({
    uname: "",
    pass: "",
  });
  return (
    <AuthContext.Provider
      value={{ authData, setAuthData }}
    >{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuthData = () =>useContext(AuthContext)
