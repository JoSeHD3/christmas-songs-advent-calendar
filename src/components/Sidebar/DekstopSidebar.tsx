import useSidebarStore from '@/utils/sidebarStore';

const DesktopSidebar = () => {
  const { isExpanded, toggleSidebar } = useSidebarStore();

  return (
    <aside
      className={`top-0 left-0 h-full ${
        isExpanded ? 'w-64' : 'w-20'
      } bg-white text-black z-30 transition-all duration-300`}
    >
      <div className='fixed h-full flex flex-col justify-between overflow-hidden'>
        <div className='p-4'>
          <button
            onClick={toggleSidebar}
            className='mb-4 p-2 bg-gray-200 rounded'
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
          {isExpanded ? (
            <p className='truncate'>Full Sidebar Content</p>
          ) : (
            <p>☰</p>
          )}
        </div>
      </div>
    </aside>
  );
};

export { DesktopSidebar };
