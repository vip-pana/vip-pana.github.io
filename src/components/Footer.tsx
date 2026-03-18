import { NavLink, useLocation } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import contactsItems from '../assets/mock/mockContacts';
import { DinoGame } from './DinoGame';

export const Footer = () => {
  const location = useLocation();
  return (
    <div className="max-w-[70%] mx-auto">
      <DinoGame />
      <Separator />
      <div className="flex items-center py-6">
        <div className="flex gap-6">
          <NavLink
            to={'about'}
            className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-nord-accent ${
              location.pathname === '/about'
                ? 'text-nord-accent'
                : 'text-nord-text'
            }`}
          >
            About
          </NavLink>
          <NavLink
            to={'projects'}
            className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-nord-accent ${
              location.pathname === '/projects'
                ? 'text-nord-accent'
                : 'text-nord-text'
            }`}
          >
            Portfolio
          </NavLink>
        </div>
        <div className="flex-1" />
        <div className="flex gap-3 items-center">
          {contactsItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" aria-label={item.ariaLabel} className="h-8 w-8">
                <item.icon className="w-4 h-4" />
              </Button>
            </a>
          ))}
        </div>
      </div>
      <p className="text-gray-400 text-xs text-center pb-4">
        © {new Date().getFullYear()} Vincenzo Panacciulli
      </p>
    </div>
  );
};
