import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { FirstAbout } from '../components/FirstAbout';
import { SecondAbout } from '../components/SecondAbout';
import { InitialAnimation } from '../types';

interface AboutProps {
  isLargerThan1280: boolean;
  initialAnimation: InitialAnimation;
}

export const About = (props: AboutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsOpen(true);
    }, 500);
  }, []);

  return (
    <div
      className={`${props.isLargerThan1280 ? 'max-w-[70%] pt-20' : 'max-w-full pt-5'} mx-auto p-10`}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <FirstAbout
              isLargerThan1280={props.isLargerThan1280}
              initialAnimation={props.initialAnimation}
            />
            <SecondAbout
              isLargerThan1280={props.isLargerThan1280}
              initialAnimation={props.initialAnimation}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
