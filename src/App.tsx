import { Route, Routes } from 'react-router-dom';

import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Base } from './pages/base/Base';
import { Home } from './pages/Home';

import { useMediaQuery } from './hooks/useMediaQuery';

function App() {
  const isLargerThan1280 = useMediaQuery('(min-width: 1280px)');

  return (
    <Routes>
      <Route
        element={<Base isLargerThan1280={isLargerThan1280} />}
      >
        <Route
          path="/"
          element={<Home isLargerThan1280={isLargerThan1280} />}
        />
        <Route
          path="/about"
          element={<About isLargerThan1280={isLargerThan1280} />}
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
