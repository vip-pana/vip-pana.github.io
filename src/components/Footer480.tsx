import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import contactsItems from '../assets/mock/mockContacts';
import { InitialAnimation } from '../types';

interface Footer480Props {
  initialAnimation: InitialAnimation;
}

export const Footer480 = (props: Footer480Props) => {
  return (
    <div className="px-4">
      <Separator />
      <div className="grid grid-cols-3 m-8 justify-items-center">
        {contactsItems.map((item, index) => (
          <div key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <motion.button whileTap={props.initialAnimation.whileTap}>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label={item.ariaLabel}
                  className="rounded-full h-10 w-10 bg-nord-surface text-nord-text border-border shadow-md"
                >
                  <item.icon className="w-5 h-5" />
                </Button>
              </motion.button>
            </a>
          </div>
        ))}
      </div>
      <p className="text-nord-accent mb-2 text-center">
        © 2023 Pana. Built in React.
      </p>
    </div>
  );
};
