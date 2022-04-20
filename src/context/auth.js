import { createContext, useState } from "react";

const authContextDefaultValues = {
  email: null,
  isAuthenticated: false,
  toggleAuth: () => null,
};

export const AuthContext = createContext(authContextDefaultValues);

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || {
      email: null,
      isAuthenticated: false,
    }
  );

  const toggleAuth = (email) => {
    localStorage.setItem(
      "isLoggedIn",
      JSON.stringify({
        email: email,
        isAuthenticated: !isLoggedIn.isAuthenticated,
      })
    );
    setIsLoggedIn({
      email: email,
      isAuthenticated: !isLoggedIn.isAuthenticated,
    });
  };

  return (
    <>
      <AuthContext.Provider value={{ ...isLoggedIn, toggleAuth }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
