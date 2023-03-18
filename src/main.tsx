import React from "react";
import ReactDOM from "react-dom/client";
import { createServer } from "miragejs";

import App from "./App";
import { createOptimizedContext } from "@/utils/createOptimizedContext";

import "./index.css";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/teams", () => {
      const teamsData: Utils.MinArrayLength<string, 16> = [
        "Brazil",
        "Chile",
        "Colombia",
        "Uruguay",
        "France",
        "Nigeria",
        "Germany",
        "Algeria",
        "Netherlands",
        "Mexico",
        "Costa Rico",
        "Greece",
        "Argentina",
        "Switzerland",
        "Belgium",
        "United States",
      ];

      const shuffledTeamsData = [...teamsData].sort(() => 0.5 - Math.random());

      return shuffledTeamsData.slice(0, 16);
    });
  },
});

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
