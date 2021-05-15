import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { useIntl } from 'react-intl';

import { useAppDispatch } from '../../store';
import { getTodosData } from './slice';
import { selectTodos } from './selectors';
import { Checkbox, Modal, ModalContainer } from '../../components';

import styles from './todo.module.scss';

export const Todo: FC = () => {
  const [isModalOpen, toggleOpenModal] = useState(false);
  const dispatch = useAppDispatch();
  const todos = useSelector(selectTodos);
  const intl = useIntl();

  useEffect(() => {
    dispatch(getTodosData());
  }, [dispatch]);

  const handlerOpenModal = () => {
    toggleOpenModal(!isModalOpen);
  };

  return (
    <>
      <ModalContainer>
        <Modal isOpen={isModalOpen}>
          MODAL <button onClick={handlerOpenModal}>Close modal</button>
        </Modal>
      </ModalContainer>
      <button onClick={handlerOpenModal}>Open modal</button>

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
