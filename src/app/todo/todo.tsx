import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { useIntl } from 'react-intl';

import { useAppDispatch } from '../../store';
import { getTodosData } from './slice';
import { selectTodos } from './selectors';
import { Checkbox } from '../../components';

import styles from './todo.module.scss';

export const Todo: FC = () => {
  const dispatch = useAppDispatch();
  const todos = useSelector(selectTodos);
  const intl = useIntl();

  useEffect(() => {
    dispatch(getTodosData());
  }, [dispatch]);

  return (
    <>
      <h1>{intl.formatMessage({ id: 'TITLE' })}</h1>
      <div className={styles.list}>
        {todos.map((todo) => (
          <div key={todo.id} className={clsx(styles.item, { [styles.active]: todo.completed })}>
            <div className={styles.title}>{todo.title}</div>
            <Checkbox checked={todo.completed} onChange={() => {}} />
          </div>
        ))}
      </div>
    </>
  );
};
