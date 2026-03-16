import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import contactsItems from '../assets/mock/mockContacts';

export const Footer480 = () => {
  return (
    <div className="px-4">
      <Separator />
      <div className="grid grid-cols-3 m-8 justify-items-center">
        {contactsItems.map((item, index) => (
          <div key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                aria-label={item.ariaLabel}
              >
                <item.icon className="w-5 h-5" />
              </Button>
            </a>
          </div>
        ))}
      </div>
      <p className="text-nord-accent mb-2 text-center text-sm font-bold uppercase tracking-wider">
        © 2023 Pana. Built in React.
      </p>
    </div>
  );
};
