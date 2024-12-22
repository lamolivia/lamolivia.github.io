import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { themeOptions } from "./theme.js";
import { ThemeProvider, createTheme } from "@mui/material";

import { WindowProvider } from "./WindowProvider.jsx";

const theme = createTheme(themeOptions);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <WindowProvider>
        <App />
      </WindowProvider>
    </ThemeProvider>
  </StrictMode>
);
