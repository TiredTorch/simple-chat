import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { routes } from './list';

export const AppRoutes: FC = () => {
  const isAuth = true;
  return (
    <Routes>
      {routes.map((route) => {
        if (route.auth && !isAuth) {
          return false;
        }
        return (
          <Route
            path={route.path}
            key={`route ${route.path}`}
            element={
              <>
                <Layout>
                  <route.component />
                </Layout>
              </>
            }
          />
        );
      })}
    </Routes>
  );
};
