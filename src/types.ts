import { type ComponentType, type SVGProps } from 'react';

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
  icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;
}

export interface ContactItem {
  ariaLabel: string;
  link: string;
  icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;
}

export interface WorkItem {
  title: string;
  company: string;
  time: string;
  Tasks: string[];
  link: string;
}
