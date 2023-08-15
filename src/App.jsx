import { Route, Routes } from "react-router-dom";

import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { Base } from "./pages/Base";
import { Home } from "./pages/Home";

import { useColorMode, useMediaQuery } from "@chakra-ui/react";

function App() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isLargerThan1280] = useMediaQuery(["(min-width: 1280px)"]);

  return (
    <Routes>
      <Route
        element={<Base isDark={isDark} isLargerThan1280={isLargerThan1280} />}
      >
        <Route
          path="/"
          element={<Home isDark={isDark} isLargerThan1280={isLargerThan1280} />}
        />
        <Route
          path="/about"
          element={
            <About isDark={isDark} isLargerThan1280={isLargerThan1280} />
          }
        />
        <Route
          path="/projects"
          element={
            <Portfolio isDark={isDark} isLargerThan1280={isLargerThan1280} />
          }
        />
      </Route>
      <Route path="*" element={<>error 404!</>} />
    </Routes>
  );
}

export default App;
