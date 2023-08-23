import { Route, Routes } from "react-router-dom";

import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { Base } from "./pages/base/Base";
import { Home } from "./pages/Home";

import { useColorMode, useMediaQuery } from "@chakra-ui/react";

function App() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isLargerThan1280] = useMediaQuery(["(min-width: 1280px)"]);

  const initialAnimation = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  };

  const colorOptions = {
    hoverColor: {
      color: isDark ? "teal.400" : "",
      background: isDark ? "" : "purple.200",
    },
    hoverNavbarColor: {
      color: isDark ? "teal.400" : "purple.400",
    },
    hoverColorContact: { color: isDark ? "teal.400" : "purple.400" },
    selectedColorScheme: isDark ? "teal" : "whiteAlpha",
    buttonBackground: isDark ? "" : "white",
    buttonColor: isDark ? "teal.300" : "blackAlpha",
    buttonVariant: isDark ? "outline" : "solid",
    selectedButton: isDark ? "teal.700" : "blackAlpha.400",
    buttonBoxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.2)",
  };

  return (
    <Routes>
      <Route
        element={
          <Base
            isDark={isDark}
            isLargerThan1280={isLargerThan1280}
            initialAnimation={initialAnimation}
            colorOptions={colorOptions}
          />
        }
      >
        <Route
          path="/"
          element={
            <Home
              isDark={isDark}
              isLargerThan1280={isLargerThan1280}
              initialAnimation={initialAnimation}
              colorOptions={colorOptions}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              isDark={isDark}
              isLargerThan1280={isLargerThan1280}
              initialAnimation={initialAnimation}
              colorOptions={colorOptions}
            />
          }
        />
        <Route
          path="/projects"
          element={
            <Portfolio isDark={isDark} isLargerThan1280={isLargerThan1280} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
