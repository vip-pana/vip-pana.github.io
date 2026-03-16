import { Outlet } from 'react-router-dom';

import { ContactButton } from '../../components/ContactButton';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

import { Navbar480 } from '../../components/Navbar480';
import { Footer480 } from '../../components/Footer480';

import { motion } from 'framer-motion';
import { InitialAnimation } from '../../types';

interface BaseProps {
  initialAnimation: InitialAnimation;
  isLargerThan1280: boolean;
}

export const Base = (props: BaseProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {props.isLargerThan1280 ? (
        <>
          <ContactButton
            initialAnimation={props.initialAnimation}
            columnDirection={true}
          />
          <Navbar initialAnimation={props.initialAnimation} />
          <div className="flex-1">
            <motion.div
              initial={props.initialAnimation.initial}
              animate={props.initialAnimation.animate}
              transition={{
                ease: 'linear',
                duration: 0.1,
                x: { duration: 0.5 },
              }}
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
          <Footer480 initialAnimation={props.initialAnimation} />
        </>
      )}
    </div>
  );
};
