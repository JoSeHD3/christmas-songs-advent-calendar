import { ShadcnButton } from '@/components/ui';
import { cn } from '@/lib/utils';
import useSidebarStore from '@/utils/sidebarStore';
import { ElementType } from 'react';

const SidebarItem = ({
  icon: Icon,
  action,
  text,
}: {
  icon: ElementType;
  action: () => void;
  text: string;
}) => {
  const { isExpanded } = useSidebarStore();
  const styling = cn(
    'w-full flex p-[10px] rounded mt-4 justify-start',
    isExpanded && 'p-[10px]'
  );

  return (
    <ShadcnButton
      onClick={action}
      variant='ghost'
      size='default'
      className={styling}
    >
      <Icon className='w-8 h-8' />
      {isExpanded && <span className='ml-3'>{text}</span>}
    </ShadcnButton>
  );
};

export { SidebarItem };
