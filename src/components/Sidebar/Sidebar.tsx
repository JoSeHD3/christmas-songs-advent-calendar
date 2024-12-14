'use client';

import { useState, useEffect } from 'react';
import { DesktopSidebar } from './DekstopSidebar';
import { MobileSidebar } from './MobileSidebar';

const Sidebar = () => {
  const [mobile, setMobile] = useState<boolean>();

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 576 ? true : false);
    };

    updateMobile();
    window.addEventListener('resize', updateMobile);
    return () => {
      window.removeEventListener('resize', updateMobile);
    };
  }, []);

  return typeof mobile !== 'undefined' ? (
    mobile ? (
      <MobileSidebar />
    ) : (
      <DesktopSidebar />
    )
  ) : null;
};

export { Sidebar };
