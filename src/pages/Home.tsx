import { useState, useEffect } from 'react';

import { LabelWrapper } from '../components/LabelWrapper';
import { Button } from '@/components/ui/button';

import { motion, AnimatePresence } from 'framer-motion';

interface HomeProps {
  isLargerThan1280: boolean;
}

export const Home = (props: HomeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsOpen(true);
    }, 500);
  }, []);

  return (
    <div
      className={`${props.isLargerThan1280 ? 'max-w-[70%] pt-20' : 'max-w-full pt-5'} mx-auto min-h-[80vh] p-10`}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: 'linear' }}
          >
            <motion.p
              className="text-3xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15, ease: 'linear', delay: 0.1 }}
            >
              👋🏻 Hello world!
            </motion.p>
            <motion.h1
              className={`font-bold mb-3 ${props.isLargerThan1280 ? 'text-[42px]' : 'text-4xl'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15, ease: 'linear', delay: 0.2 }}
            >
              I'm Vincenzo Panacciulli
            </motion.h1>
            <LabelWrapper />
            <motion.p
              className={`text-xl text-gray-400 ${props.isLargerThan1280 ? 'mt-5' : '-mt-5'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15, ease: 'linear', delay: 0.3 }}
            >
              I solve problems with clean, efficient solutions. I work across
              the stack, ship fast, and care about outcomes. <br /> <br />
              Visit my{' '}
              <strong className="bg-gradient-to-r from-nord-accent to-nord-green bg-clip-text text-transparent">
                <a href="#/about" aria-label="about page">
                  About
                </a>
              </strong>{' '}
              or my{' '}
              <strong className="bg-gradient-to-r from-nord-accent to-nord-green bg-clip-text text-transparent">
                <a href="#/projects" aria-label="portfolio page">
                  Portfolio
                </a>
              </strong>
              , or if you want{' '}
              <strong className="bg-gradient-to-r from-nord-accent to-nord-green bg-clip-text text-transparent">
                <a
                  href="https://omnes.one/vincenzo-ivan-panacciulli"
                  target="_blank"
                  aria-label="my socials"
                >
                  check out my social!
                </a>
              </strong>
            </motion.p>

            <br />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, ease: 'linear', delay: 0.4 }}
            >
              <a
                href="mailto:v.panacciulli@pm.me"
                aria-label="my email"
              >
                <Button
                  size="lg"
                  aria-label="contact me"
                  className={props.isLargerThan1280 ? 'mt-20' : 'mt-[35px]'}
                >
                  Contact me for anything!
                </Button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
