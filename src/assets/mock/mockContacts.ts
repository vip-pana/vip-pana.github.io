import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { ContactItem } from '../../types';

const contactsItems: ContactItem[] = [
  {
    ariaLabel: 'github link',
    link: 'https://github.com/vip-pana',
    icon: FaGithub,
  },
  {
    ariaLabel: 'linkedin link',
    link: 'https://linkedin.com/in/vip-pana',
    icon: FaLinkedinIn,
  },
  {
    ariaLabel: 'mail link',
    link: 'mailto:panacciullivincenzo@gmail.com',
    icon: FaEnvelope,
  },
];

export default contactsItems;
