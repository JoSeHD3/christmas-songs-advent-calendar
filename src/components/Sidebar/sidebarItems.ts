import { Item } from '@/utils/interfaces';
import { Music, Video } from 'lucide-react';

export const sidebarItems: Item[] = [
  {
    icon: Music,
    href: '/',
    text: 'Songs Calendar',
  },
  {
    icon: Video,
    href: '/movies',
    text: 'Movies Calendar',
  },
];
