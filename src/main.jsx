import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./globals.css";
import FormContextProvider from "./store/context/formctx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FormContextProvider>
    <App />
  </FormContextProvider>
);
