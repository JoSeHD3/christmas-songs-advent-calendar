import useSidebarStore from '@/utils/sidebarStore';
import { Separator, ShadcnButton } from '../ui';
import { ChevronLeft, ChevronRight, House } from 'lucide-react';
import { SidebarItem } from './SidebarItem';
import { sidebarItems as items } from './sidebarItems';

const DesktopSidebar = () => {
  const { isExpanded, toggleSidebar } = useSidebarStore();

  return (
    <aside
      className={`sticky top-0 left-0 h-full ${
        isExpanded ? 'w-64' : 'w-[68px]'
      } bg-white text-black z-30 transition-all duration-300`}
    >
      <div className='relative h-full flex flex-col justify-between overflow-hidden'>
        <div className=' p-4 w-full'>
          <ShadcnButton
            onClick={toggleSidebar}
            className='mb-4 p-2 rounded'
            variant='ghost'
            size='icon'
          >
            {isExpanded ? <ChevronLeft /> : <ChevronRight />}
          </ShadcnButton>
          <Separator className='w-full' />
          {items.map((item, index) => (
            <SidebarItem
              icon={item.icon}
              href={item.href}
              text={item.text}
              key={index}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export { DesktopSidebar };
