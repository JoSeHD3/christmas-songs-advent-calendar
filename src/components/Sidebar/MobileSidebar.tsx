import {
  ShadcnButton,
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui';
import { Menu } from 'lucide-react';
import { sidebarItems as items } from './sidebarItems';
import { SidebarItem } from './SidebarItem';

const MobileSidebar = () => {
  return (
    <div className='fixed top-3 right-3 z-30'>
      <Sheet>
        <SheetTrigger className='text-white'>
          <Menu size={32} />
        </SheetTrigger>
        <SheetContent
          className='w-[101%] bg-red-800 text-white'
          aria-describedby={undefined}
        >
          <SheetTitle></SheetTitle>
          <SheetHeader>
            <span>CHOOSE YOUR ADVENT CALENDAR</span>
          </SheetHeader>
          {items.map((item, index) => (
            <SheetClose key={index} asChild>
              <SidebarItem
                icon={item.icon}
                href={item.href}
                text={item.text}
                isAlwaysVisible={true}
              />
            </SheetClose>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export { MobileSidebar };
