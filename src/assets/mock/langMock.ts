import {
  SiReact,
  SiLaravel,
  SiAngular,
  SiVuedotjs,
  SiTypescript,
  SiNodedotjs,
  SiDocker,
  SiGo,
} from '@icons-pack/react-simple-icons';
import { LangItem } from '../../types';

const langItems: LangItem[] = [
  {
    name: 'React & Next.js',
    icon: SiReact,
  },
  {
    name: 'Vue & Nuxt',
    icon: SiVuedotjs,
  },
  {
    name: 'Angular',
    icon: SiAngular,
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
  },
  {
    name: 'Laravel',
    icon: SiLaravel,
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
  },
  {
    name: 'Go',
    icon: SiGo,
  },
  {
    name: 'Docker',
    icon: SiDocker,
  },
];

export default langItems;
