import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AulaContextProvider } from "./contexts/aulaContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AulaContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AulaContextProvider>
);
