
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import App from "./App.tsx";
import "./styles/main.scss";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);