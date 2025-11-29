import { createContext, useState } from 'react'
import PropTypes from "prop-types";


export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const cartJson = localStorage.getItem("cart");
  const [cart, setCart] = useState(JSON.parse(cartJson) || []);

  const state = {cart, setCart};

  return (
    <CartContext.Provider value={state}>
      {children}
    </CartContext.Provider>
  )
}

CartContextProvider.propTypes = {
  children: PropTypes.node,
};

export default CartContextProvider;