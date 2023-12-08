import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import ReactQuery from "./providers/react-query.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NextUIProvider>
    <ReactQuery>
      <App></App>
    </ReactQuery>
  </NextUIProvider>
);
