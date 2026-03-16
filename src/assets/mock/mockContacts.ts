import { Github, Linkedin, Mail } from 'lucide-react';
import { ContactItem } from '../../types';

const contactsItems: ContactItem[] = [
  {
    ariaLabel: 'github link',
    link: 'https://github.com/vip-pana',
    icon: Github,
  },
  {
    ariaLabel: 'linkedin link',
    link: 'https://linkedin.com/in/vip-pana',
    icon: Linkedin,
  },
  {
    ariaLabel: 'mail link',
    link: 'mailto:panacciullivincenzo@gmail.com',
    icon: Mail,
  },
];

export default contactsItems;
