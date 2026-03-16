import { IconType } from 'react-icons';

// Mock data types
export interface CardItem {
  img: string;
  title: string;
  label: string[];
  body: string;
  link: string;
}

export interface CertificationItem {
  img: string;
  title: string;
  body: string;
  link: string;
}

export interface LangItem {
  name: string;
  icon: IconType;
}

export interface ContactItem {
  ariaLabel: string;
  link: string;
  icon: IconType;
}

export interface WorkItem {
  title: string;
  company: string;
  time: string;
  Tasks: string[];
  link: string;
}

// Animation types
export interface InitialAnimation {
  initial: { opacity: number; scale: number };
  animate: { opacity: number; scale: number };
  transition: {
    duration: number;
    delay: number;
    ease: any;
  };
  whileHover: { scale: number };
  whileTap: { scale: number };
}
