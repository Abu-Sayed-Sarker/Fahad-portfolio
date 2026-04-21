import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Stores/store";
import { Router } from "./Routes/Router";

const rootElement = document.getElementById("root") as HTMLElement | null;

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={Router} />
      </Provider>
    </StrictMode>
  );
}