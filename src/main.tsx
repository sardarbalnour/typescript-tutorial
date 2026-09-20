import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Function from "./components/Function.tsx";
import State from "./components/State.tsx";
import Button from "./components/Button.tsx";
import User4 from "./components/User4.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Function />
    <State />
    <Button type="button" buttonTitle="Click Me" />
    <User4 />
  </StrictMode>
);
