import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { createOptimizedContext } from "@/utils/createOptimizedContext";

import "./index.css";

export const {
  Provider: ThemeProvider,
  useStateSelector: useThemeSelector,
  useStateUpdate: useThemeUpdate,
} = createOptimizedContext<Context.Theme>();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider initialState={{ type: "Dark" }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
