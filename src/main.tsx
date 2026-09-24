import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Function from "./components/Function.tsx";
import State from "./components/State.tsx";
import Button from "./components/Button.tsx";
import User4 from "./components/User4.tsx";
import Button2 from "./components/Button2.tsx";
import Button4 from "./components/Button4.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Function />
    <State />
    <Button
      style={{ color: "red", padding: "6px 12px", backgroundColor: "black" }}
      type="button"
      buttonTitle="Click Me"
    />
    <User4 />
    <Button2
      borderRadius={{ topLeft: 2, topRight: 2, bottomLeft: 3, bottomRight: 5 }}
    />
    <Button4 countValue={12} countHistory={[20, 30, 44]} />
  </StrictMode>
);
