import React, { createContext } from "react";
import useStorage from "../hooks/useStorage";

export const CartContext = createContext();

const UserCartContext = ({ children }) => {
  const { data: cart, storeData: setCart } = useStorage("cart", []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default UserCartContext;
