import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';

import { HashRouter } from 'react-router-dom';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const styles = {
  global: {
    body: {
      color: '#ECEFF4',
      bg: '#2E3440',
      fontFamily: "'Fira Code', monospace",
    },
  },
};

const theme = extendTheme({
  styles,
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    body: "'Fira Code', monospace",
    heading: "'Fira Code', monospace",
    mono: "'Fira Code', monospace",
  },
  colors: {
    nord: {
      0: '#2C3E50',
      1: '#34495E',
      2: '#3E4C59',
      3: '#4C5967',
      4: '#88C0D0',
      5: '#81A1C1',
      6: '#5E81AC',
      7: '#A3BE8C',
      8: '#EBCB8B',
      9: '#D08770',
      10: '#BF616A',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </HashRouter>
  </React.StrictMode>
);
