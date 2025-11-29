import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n.js";
import ThemeContextProvider from "./context/ThemeContextProvider.jsx";

import "react-lazy-load-image-component/src/effects/blur.css";
import LoaderPage from "./components/loader/index.jsx";
import CartContextProvider from "./context/CartContextProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<LoaderPage />}>
      <CartContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
      </CartContextProvider>
    </Suspense>
  </React.StrictMode>
);
