import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { FirstPortfolio } from '../components/FirstPortfolio';
import { SecondPortfolio } from '../components/SecondPortfolio';

interface PortfolioProps {
  isLargerThan1280: boolean;
}

export const Portfolio = (props: PortfolioProps) => {
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
            <FirstPortfolio />
            <SecondPortfolio isLargerThan1280={props.isLargerThan1280} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
