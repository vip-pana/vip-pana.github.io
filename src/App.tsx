import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Base } from './pages/base/Base';
import { useMediaQuery } from './hooks/useMediaQuery';

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Portfolio = lazy(() => import('./pages/Portfolio').then((m) => ({ default: m.Portfolio })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

function App() {
  const isLargerThan1280 = useMediaQuery('(min-width: 1280px)');

  return (
    <Suspense>
      <Routes>
        <Route element={<Base isLargerThan1280={isLargerThan1280} />}>
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
