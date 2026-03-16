import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Download, ChevronDown } from 'lucide-react';

import fileCV from '../assets/CV.pdf';

export const Navbar480 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex m-5">
      <div className="flex-1" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="lg" aria-label="menu">
            Menu <ChevronDown className="ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => navigate('about')}>
            About
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('projects')}>
            PortFolio
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <a
              href={fileCV}
              download={'CV Pana'}
              target="_blank"
              aria-label="my resume"
              className="flex items-center justify-between w-full"
            >
              CV
              <Download />
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
