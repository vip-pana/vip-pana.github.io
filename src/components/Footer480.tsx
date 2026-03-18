import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import contactsItems from '../assets/mock/mockContacts';
import { DinoGame } from './DinoGame';

export const Footer480 = () => {
  return (
    <div className="px-4">
      <DinoGame />
      <Separator />
      <div className="flex justify-center gap-4 my-6">
        {contactsItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="icon"
              aria-label={item.ariaLabel}
            >
              <item.icon className="w-5 h-5" />
            </Button>
          </a>
        ))}
      </div>
      <p className="text-gray-400 text-xs text-center pb-4">
        © {new Date().getFullYear()} Vincenzo Panacciulli
      </p>
    </div>
  );
};
