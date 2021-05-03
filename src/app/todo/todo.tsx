import React, { FC, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../store';
import { getTodosData } from './slice';
import { selectTodos } from './selectors';

export const Todo: FC = () => {
  const dispatch = useAppDispatch();
  const todos = useSelector(selectTodos);

  useEffect(() => {
    dispatch(getTodosData());
  }, [dispatch]);

  return (
    <div>
      Todo list
      {todos.map((todo) => (
        <Fragment key={todo.id}>
          <div>id - {todo.id}</div>
          <div>userId - {todo.userId}</div>
          <div>title - {todo.title}</div>
          <div>{todo.completed ? 'Competed' : 'Incompleted'}</div>
        </Fragment>
      ))}
    </div>
  );
};
