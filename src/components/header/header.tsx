import React, { FC } from 'react';
import Select from 'react-select';

import { useAppDispatch } from '../../store';
import { setLocale } from '../../app/shared/configuration';

import styles from './header.module.scss';

const options = [
  { value: 'en', label: 'English' },
  { value: 'de', label: 'Deutsch' },
];

export const Header: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.header}>
      <Select
        options={options}
        onChange={(item) => {
          if (item && item.value) {
            dispatch(setLocale(item.value));
          }
        }}
      />
    </div>
  );
};
