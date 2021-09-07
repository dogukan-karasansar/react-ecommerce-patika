import { useState, useEffect, createContext, useContext } from "react";
import { fetchRegister, fetchMe } from "../Api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      const me = await fetchMe();
      console.log(me);
      setLoggedIn(true);
      setUser(me);
    })();
  }, []);

  const login = (data) => {
    setLoggedIn(true);
    setUser(data.user);
    localStorage.setItem("access-token", data.access_token);
  };

  const values = {
    user,
    login,
    loggedIn,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
