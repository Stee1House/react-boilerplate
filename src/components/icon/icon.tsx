import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './icon.module.scss';

interface IconProps {
  name: string;
  className?: string;
  transform?: string;
}

export const Icon: FC<IconProps> = ({ name, className, transform = '' }) => (
  <div className={clsx(className, styles.iconBox)}>
    <svg transform={transform}>
      <use xlinkHref={`#${name}`} />
    </svg>
  </div>
);
