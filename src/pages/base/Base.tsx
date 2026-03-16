import { Outlet } from 'react-router-dom';

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
  return (
    <div className="min-h-screen flex flex-col">
      {props.isLargerThan1280 ? (
        <>
          <ContactButton columnDirection={true} />
          <Navbar />
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15, ease: 'linear' }}
            >
              <Outlet />
            </motion.div>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <Navbar480 />
          <Outlet />
          <Footer480 />
        </>
      )}
    </div>
  );
};
