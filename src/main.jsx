import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./typography/typography.css";
import "./index.css";
import { SpeedInsights } from "@vercel/speed-insights/react";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SpeedInsights />
    <App />
  </StrictMode>,
);
