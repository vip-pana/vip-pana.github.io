import { Route, Routes } from 'react-router-dom';

import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Base } from './pages/base/Base';
import { Home } from './pages/Home';

import { useMediaQuery } from './hooks/useMediaQuery';

function App() {
  const isLargerThan1280 = useMediaQuery('(min-width: 1280px)');

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

  return (
    <Routes>
      <Route
        element={
          <Base
            isLargerThan1280={isLargerThan1280}
            initialAnimation={initialAnimation}
          />
        }
      >
        <Route
          path="/"
          element={
            <Home
              isLargerThan1280={isLargerThan1280}
              initialAnimation={initialAnimation}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              isLargerThan1280={isLargerThan1280}
              initialAnimation={initialAnimation}
            />
          }
        />
        <Route
          path="/projects"
          element={<Portfolio isLargerThan1280={isLargerThan1280} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
