import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Function from "./components/Function.tsx";
import State from "./components/State.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Function />
    <State />
  </StrictMode>
);
