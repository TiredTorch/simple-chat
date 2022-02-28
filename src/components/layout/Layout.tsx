import React, { FC } from 'react';
import { Sidebar } from './sidebar/Sidebar';
import { Header } from './header/Header';

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        {children}
      </div>
    </>
  );
};
