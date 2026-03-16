import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { ContactButton } from '../../components/ContactButton';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

import { Navbar480 } from '../../components/Navbar480';
import { Footer480 } from '../../components/Footer480';

import { motion } from 'framer-motion';

interface BaseProps {
  isLargerThan1280: boolean;
}

export const Base = (props: BaseProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-nord-accent focus:text-nord-bg focus:font-bold focus:uppercase focus:tracking-wider focus:border-2 focus:border-nord-text focus:shadow-[4px_4px_0px_0px_var(--color-nord-text)]"
      >
        Skip to content
      </a>
      {props.isLargerThan1280 ? (
        <>
          <ContactButton columnDirection={true} />
          <nav aria-label="Main navigation">
            <Navbar />
          </nav>
          <main id="main-content" className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15, ease: 'linear' }}
            >
              <Outlet />
            </motion.div>
          </main>
          <footer aria-label="Footer">
            <Footer />
          </footer>
        </>
      ) : (
        <>
          <nav aria-label="Main navigation">
            <Navbar480 />
          </nav>
          <main id="main-content">
            <Outlet />
          </main>
          <footer aria-label="Footer">
            <Footer480 />
          </footer>
        </>
      )}
    </div>
  );
};
