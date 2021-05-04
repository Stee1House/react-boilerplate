import React, { FC } from 'react';

import styles from './layout.module.scss';

export const Layout: FC = ({ children }) => <div className={styles.layout}>{children}</div>;
