import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

import fileCV from '../assets/CV.pdf';

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex mx-[4%] mt-5">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: 'linear', delay: 0.1 }}
      >
        <a
          href={fileCV}
          download={'CV Pana'}
          className="fixed"
          aria-label="my cv"
        >
          <Button variant="outline" aria-label="my resume">
            CV <Download className="ml-1" />
          </Button>
        </a>
      </motion.div>
      <div className="flex-1" />
      <motion.div
        className="flex gap-3"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: 'linear', delay: 0.2 }}
      >
        <Button
          aria-label="about page"
          variant={location.pathname === '/about' ? 'default' : 'outline'}
          onClick={() => navigate('about')}
        >
          About
        </Button>
        <Button
          aria-label="portfolio page"
          variant={location.pathname === '/projects' ? 'default' : 'outline'}
          onClick={() => navigate('projects')}
        >
          Portfolio
        </Button>
      </motion.div>
      <div className="flex-1" />
    </div>
  );
};
