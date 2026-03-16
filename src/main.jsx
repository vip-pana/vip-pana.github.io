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
      fontFamily: "'Fira Code', monospace",
    },
  }),
};

const theme = extendTheme({
  styles,
  fonts: {
    body: "'Fira Code', monospace",
    heading: "'Fira Code', monospace",
    mono: "'Fira Code', monospace",
  },
});

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
