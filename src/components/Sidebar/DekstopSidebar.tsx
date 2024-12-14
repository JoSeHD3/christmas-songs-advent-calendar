import useSidebarStore from '@/utils/sidebarStore';
import { Separator, ShadcnButton } from '../ui';
import { ChevronLeft, ChevronRight, House } from 'lucide-react';
import { SidebarItem } from './SidebarItem';

const DesktopSidebar = () => {
  const { isExpanded, toggleSidebar } = useSidebarStore();

  return (
    <aside
      className={`top-0 left-0 h-full ${
        isExpanded ? 'w-64' : 'w-[68px]'
      } bg-white text-black z-30 transition-all duration-300`}
    >
      <div className='fixed h-full flex flex-col justify-between overflow-hidden'>
        <div className='p-4 grid grid-cols-1 w-full'>
          <ShadcnButton
            onClick={toggleSidebar}
            className='mb-4 p-2 rounded'
            variant='ghost'
            size='icon'
          >
            {isExpanded ? <ChevronLeft /> : <ChevronRight />}
          </ShadcnButton>
          <Separator className='w-full -z-10' />
          <SidebarItem
            icon={House}
            action={() => console.log('button clicked')}
            text='Main Page'
          />
        </div>
      </div>
    </aside>
  );
};

export { DesktopSidebar };
