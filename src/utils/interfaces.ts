import { ElementType } from 'react';

export interface Song {
  id: number;
  name: string;
  youtube: string;
}

export interface Movie {
  id: number;
  name: string;
  youtube: string;
}

export interface Item {
  icon: ElementType;
  href: string;
  text: string;
  isAlwaysVisible?: boolean;
}
