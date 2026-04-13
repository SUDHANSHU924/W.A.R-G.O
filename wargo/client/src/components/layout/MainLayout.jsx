import React, { useState } from 'react';
import { Sidebar, Header } from './Navigation';

export const MainLayout = ({ children, activePage, setPage }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Sidebar
        activePage={activePage}
        setPage={setPage}
        isMobile={isMobile}
        isOpen={isMobileOpen}
        setIsOpen={setIsMobileOpen}
      />

      <div className='lg:pl-72'>
        <Header isMobile={isMobile} setIsOpen={setIsMobileOpen} />
        <main className='px-4 sm:px-8 py-10 max-w-5xl mx-auto'>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
