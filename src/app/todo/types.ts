import { EntityState } from '@reduxjs/toolkit';

import { RequestStatus } from '../../store/types';
import { Todo } from '../../api/todo';

export type TodoState = {
  todos: EntityState<Todo>;
  loading: RequestStatus;
  error: unknown;
};
