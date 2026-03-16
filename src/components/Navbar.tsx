import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { InitialAnimation } from '../types';

import fileCV from '../assets/CV.pdf';

interface NavbarProps {
  initialAnimation: InitialAnimation;
}

export const Navbar = (props: NavbarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex mx-[4%] mt-5">
      <motion.div
        initial={props.initialAnimation.initial}
        animate={props.initialAnimation.animate}
        transition={props.initialAnimation.transition}
      >
        <a
          href={fileCV}
          download={'CV Pana'}
          className="fixed"
          aria-label="my cv"
        >
          <motion.button
            whileHover={props.initialAnimation.whileHover}
            whileTap={props.initialAnimation.whileTap}
          >
            <Button
              variant="outline"
              aria-label="my resume"
              className="bg-nord-surface text-nord-text border-border shadow-md hover:text-nord-accent hover:bg-transparent"
            >
              CV <FiDownload className="ml-2" />
            </Button>
          </motion.button>
        </a>
      </motion.div>
      <div className="flex-1" />
      <div className="flex gap-0 rounded-[50px] shadow-md overflow-hidden">
        <Button
          aria-label="about page"
          variant="ghost"
          onClick={() => navigate('about')}
          className={`rounded-l-[50px] rounded-r-none bg-nord-surface ${
            location.pathname === '/about'
              ? 'text-nord-accent'
              : 'text-nord-text hover:text-nord-accent'
          }`}
        >
          About
        </Button>
        <Button
          aria-label="portfolio page"
          variant="ghost"
          onClick={() => navigate('projects')}
          className={`rounded-r-[50px] rounded-l-none bg-nord-surface ${
            location.pathname === '/projects'
              ? 'text-nord-accent'
              : 'text-nord-text hover:text-nord-accent'
          }`}
        >
          Portfolio
        </Button>
      </div>
      <div className="flex-1" />
    </div>
  );
};
