import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/colors.css";
import { CartProvider } from "./context/CartContext.jsx";
import { FormProvider } from "./context/formContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </CartProvider>
  </StrictMode>
);
