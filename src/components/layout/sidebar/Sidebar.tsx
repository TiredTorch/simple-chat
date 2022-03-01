import React, { FC } from 'react';
import './Sidebar.scss';

export const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      <div className="friends">
        <a href="">f</a>
        <a href="">f</a>
        <a href="">f</a>
      </div>
      <div className="personal">
        <a href="">a</a>
        <a href="">a</a>
        <a href="">a</a>
      </div>
    </div>
  );
};
