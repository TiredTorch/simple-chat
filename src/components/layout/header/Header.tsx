import React, { FC } from 'react';
import { assets } from '../../../assets/list';
import './Header.scss';

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="avatar">
        <img src="http://placekitten.com/200/300" alt="logo" />
      </div>
      <div className="logo">KITTENGRAM</div>
      <div className="exit">
        <button>
          <img src={assets.EXIT_LOGO} alt="exit" />
        </button>
      </div>
    </header>
  );
};
