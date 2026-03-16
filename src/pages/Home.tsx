import { useState, useEffect } from 'react';

import { LabelWrapper } from '../components/LabelWrapper';
import { Button } from '@/components/ui/button';

import { motion, AnimatePresence } from 'framer-motion';
import { InitialAnimation } from '../types';

interface HomeProps {
  isLargerThan1280: boolean;
  initialAnimation: InitialAnimation;
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <p className="text-3xl">👋🏻 Hello world!</p>
            <h1
              className={`font-bold mb-3 ${props.isLargerThan1280 ? 'text-[42px]' : 'text-4xl'}`}
            >
              I'm Vincenzo Panacciulli
            </h1>
            <LabelWrapper />
            <p
              className={`text-xl text-gray-400 ${props.isLargerThan1280 ? 'mt-5' : '-mt-5'}`}
            >
              I'm a software developer in continuously discovering of tech
              experience and professional growing. <br /> <br />
              I'm always happy to help and share my knowledge. 😁 <br /> <br />
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
            </p>

            <br />
            <motion.button
              whileHover={props.initialAnimation.whileHover}
              whileTap={props.initialAnimation.whileTap}
            >
              <a
                href="mailto:panacciullivincenzo@gmail.com"
                aria-label="my email"
              >
                <Button
                  size="lg"
                  aria-label="contact me"
                  className={`${props.isLargerThan1280 ? 'mt-20' : 'mt-[35px]'} bg-gradient-to-r from-nord-accent to-nord-green text-nord-bg font-semibold shadow-md hover:opacity-90`}
                >
                  Contact me for anything!
                </Button>
              </a>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
