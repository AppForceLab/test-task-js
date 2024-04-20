import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';

import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};
