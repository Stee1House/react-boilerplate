import React, { FC } from 'react';

import { Header } from '../header';

import styles from './layout.module.scss';

export const Layout: FC = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    {children}
  </div>
);
