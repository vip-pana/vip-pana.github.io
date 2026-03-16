import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { FirstAbout } from '../components/FirstAbout';
import { SecondAbout } from '../components/SecondAbout';

interface AboutProps {
  isLargerThan1280: boolean;
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: 'linear' }}
          >
            <FirstAbout isLargerThan1280={props.isLargerThan1280} />
            <SecondAbout isLargerThan1280={props.isLargerThan1280} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
