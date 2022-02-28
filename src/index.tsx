/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import { AppRoutes } from './components/routes/AppRoutes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Link to="/messages">mess</Link>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
