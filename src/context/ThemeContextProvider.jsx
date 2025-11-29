import { createContext, useState } from 'react'
import PropTypes from "prop-types";

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
      );
  const state = { theme, setTheme };

  return (
    <ThemeContext.Provider value={state}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeContextProvider;