import React, { createContext } from "react";
import useStorage from "../hooks/useStorage";

export const FavoriteContext = createContext();

const UserFavoriteContext = ({ children }) => {
  const { data: favorite, storeData: setFavorite } = useStorage("favorite", []);

  return (
    <FavoriteContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default UserFavoriteContext;
