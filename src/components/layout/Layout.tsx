import React, { FC } from 'react';
import './Layout.scss';
import { Sidebar } from './sidebar/Sidebar';
import { Header } from './header/Header';

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <section>
        <Sidebar />
        {children}
      </section>
    </>
  );
};
