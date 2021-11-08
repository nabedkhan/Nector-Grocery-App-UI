import React, { createContext } from "react";
import useStorage from "../hooks/useStorage";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const {
    data: userInfo,
    storeData: setUserInfo,
    removeData: removeUserInfo,
  } = useStorage("user", null);

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo, removeUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
