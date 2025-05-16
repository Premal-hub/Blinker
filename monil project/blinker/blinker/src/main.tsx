import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Ensure root element exists with strict null check
const rootElement = document.getElementById("root");

if (!rootElement || !(rootElement instanceof HTMLElement)) {
  throw new Error("Root element not found or is not an HTML element.");
}

// Use createRoot from React 18+
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
