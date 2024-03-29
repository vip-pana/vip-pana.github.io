import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";

import { HashRouter } from "react-router-dom";

import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("#E8E8E8", "#07131F")(props),
    },
  }),
};

const theme = extendTheme({ styles });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ColorModeScript initialColorMode="light"></ColorModeScript>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </HashRouter>
  </React.StrictMode>
);
