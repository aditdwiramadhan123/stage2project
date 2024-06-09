import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import CustomTheme from "./theme-color.tsx";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store/store.ts";
import { LoginProvider } from "./hook/use-context-login";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ChakraProvider theme={CustomTheme}>
        <LoginProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </LoginProvider>
      </ChakraProvider>
    </ReduxProvider>
  </React.StrictMode>
);
