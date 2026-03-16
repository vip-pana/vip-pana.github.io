import { NavLink, useLocation } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  const location = useLocation();
  return (
    <div className="max-w-[70%] mx-auto">
      <Separator />
      <div className="flex items-center text-nord-accent">
        <div className="flex gap-6 p-5">
          <NavLink
            to={'about'}
            className={`transition-all duration-300 hover:text-nord-accent ${
              location.pathname === '/about'
                ? 'text-nord-accent'
                : 'text-nord-text'
            }`}
          >
            About
          </NavLink>
          <NavLink
            to={'projects'}
            className={`transition-all duration-300 hover:text-nord-accent ${
              location.pathname === '/projects'
                ? 'text-nord-accent'
                : 'text-nord-text'
            }`}
          >
            Portfolio
          </NavLink>
        </div>
        <div className="flex-1" />
        <p className="text-nord-accent text-sm">
          © 2023 Pana. Built in React.
        </p>
      </div>
    </div>
  );
};
