import { createContext, useState } from "react";

const authContextDefaultValues = {
  username: null,
  email: null,
  isAuthenticated: false,
  toggleAuth: () => null,
};

export const AuthContext = createContext(authContextDefaultValues);

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || {
      username: null,
      email: null,
      isAuthenticated: false,
    }
  );

  const toggleAuth = (id, username) => {
    localStorage.setItem(
      "isLoggedIn",
      JSON.stringify({
        username: username,
        id: id,
        isAuthenticated: !isLoggedIn.isAuthenticated,
      })
    );
    setIsLoggedIn({
      username: username,
      id: id,
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
