import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
  isRejected,
  isFulfilled,
  isPending,
} from '@reduxjs/toolkit';

import { RequestStatus } from '../../store/types';
import { getTodos, getTodo, Todo } from '../../api/todo';
import { TodoState } from './types';

export const todosAdapter = createEntityAdapter<Todo>();

const initialState: TodoState = {
  todos: todosAdapter.getInitialState(),
  loading: RequestStatus.DRAFT,
  error: null,
};

export const getTodosData = createAsyncThunk('todos/getTodos', async () => getTodos());

export const getTodoData = createAsyncThunk('todos/getTodo', async (id: number) => getTodo(id));

const isPendingAction = isPending(getTodosData, getTodoData);
const isRejectedAction = isRejected(getTodosData, getTodoData);
const isFulfilledAction = isFulfilled(getTodosData, getTodoData);

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodosData.fulfilled, (state, { payload }) => {
      todosAdapter.setAll(state.todos, payload);
    });
    builder.addCase(getTodoData.fulfilled, (state, { payload }) => {
      todosAdapter.upsertOne(state.todos, payload);
    });

    builder.addMatcher(isRejectedAction, (state, { error }) => {
      state.loading = RequestStatus.FAILED;
      state.error = error.message;
    });

    builder.addMatcher(isPendingAction, (state) => {
      state.loading = RequestStatus.PENDING;
    });

    builder.addMatcher(isFulfilledAction, (state) => {
      state.loading = RequestStatus.SUCCESS;
      state.error = null;
    });
  },
});
