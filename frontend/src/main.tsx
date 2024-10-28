import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { AppContextProvider } from "./contexts/AppContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
);
