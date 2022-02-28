import * as React from 'react';
import './Navbar.scss';

export interface IAppProps {
  user: string;
}

export function Navbar(props: IAppProps) {
  return <div>{props.user}</div>;
}
