import React from 'react';
import Header from '../header/Header';

function PageLayout({ title, children }) {
  return (
    <div className='flex flex-col min-h-screen pb-[60px] pt-[20px]'>
      <Header title={title} />
        <div className='flex-grow container mx-auto px-4 sm:px-6 lg:px-8'>
          {children}
        </div>
    </div>
  );
}

export default PageLayout;
