import { Route, Routes } from "react-router-dom";

import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { Base } from "./pages/base/Base";
import { Home } from "./pages/Home";

import { useMediaQuery } from "@chakra-ui/react";

function App() {
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
      color: "#88C0D0",
      background: "transparent",
    },
    hoverNavbarColor: {
      color: "#88C0D0",
    },
    hoverColorContact: { color: "#88C0D0" },
    selectedColorScheme: "cyan",
    buttonBackground: "#3E4C59",
    buttonColor: "#ECEFF4",
    buttonVariant: "outline",
    selectedButton: "#ECEFF4",
    buttonBoxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
  };

  return (
    <Routes>
      <Route
        element={
          <Base
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
              isLargerThan1280={isLargerThan1280}
              initialAnimation={initialAnimation}
              colorOptions={colorOptions}
            />
          }
        />
        <Route
          path="/projects"
          element={
            <Portfolio isLargerThan1280={isLargerThan1280} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
