'use client';

import React, { useState, useEffect } from 'react';
import { DesktopSidebar } from './DekstopSidebar';

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
      <p>Widok mobilny</p>
    ) : (
      <DesktopSidebar />
    )
  ) : null;
};

export { Sidebar };
