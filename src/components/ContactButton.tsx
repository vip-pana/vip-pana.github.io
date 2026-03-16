import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { InitialAnimation } from '../types';
import contactsItems from '../assets/mock/mockContacts';

interface ContactButtonProps {
  initialAnimation: InitialAnimation;
  columnDirection: boolean;
}

export const ContactButton = (props: ContactButtonProps) => {
  return (
    <div
      className={`flex gap-5 ${
        props.columnDirection
          ? 'flex-col fixed bottom-[10%] left-[5%]'
          : 'flex-row ml-[20%] mt-[10%]'
      }`}
    >
      {contactsItems.map((item, index) => (
        <motion.div
          key={index}
          initial={props.initialAnimation.initial}
          animate={props.initialAnimation.animate}
          transition={props.initialAnimation.transition}
        >
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={props.initialAnimation.whileHover}
              whileTap={props.initialAnimation.whileTap}
            >
              <Button
                variant="outline"
                size="icon"
                aria-label={item.ariaLabel}
                className="rounded-full h-10 w-10 border-border bg-nord-surface text-nord-text hover:text-nord-accent hover:bg-transparent shadow-md"
              >
                <item.icon className="w-5 h-5" />
              </Button>
            </motion.button>
          </a>
        </motion.div>
      ))}
    </div>
  );
};
