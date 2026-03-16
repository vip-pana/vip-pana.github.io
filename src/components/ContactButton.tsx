import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import contactsItems from '../assets/mock/mockContacts';

interface ContactButtonProps {
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
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.15,
            ease: 'linear',
            delay: index * 0.1,
          }}
        >
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="icon"
              aria-label={item.ariaLabel}
            >
              <item.icon className="w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      ))}
    </div>
  );
};
