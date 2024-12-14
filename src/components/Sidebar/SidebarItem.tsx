import { ShadcnButton } from '@/components/ui';
import { cn } from '@/lib/utils';
import { Item } from '@/utils/interfaces';
import useSidebarStore from '@/utils/sidebarStore';
import Link from 'next/link';

const SidebarItem = ({
  icon: Icon,
  href,
  text,
  isAlwaysVisible,
  ...restProps
}: Item) => {
  const { isExpanded } = useSidebarStore();
  const styling = cn(
    'w-full flex p-[10px] rounded mt-4 justify-start',
    isExpanded && 'p-[10px]'
  );

  return (
    <ShadcnButton
      variant='ghost'
      size='default'
      className={styling}
      {...restProps}
      asChild
    >
      <Link href={href} className='flex items-center'>
        <Icon className='w-8 h-8' />
        {(isExpanded || isAlwaysVisible) && (
          <span className='ml-3'>{text}</span>
        )}
      </Link>
    </ShadcnButton>
  );
};

export { SidebarItem };
