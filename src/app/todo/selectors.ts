import { RootState } from '../../store/root-reducer';
import { todoSlice, todosAdapter } from './slice';

const { selectAll, selectById } = todosAdapter.getSelectors((state: RootState) => state[todoSlice.name].todos);

export const selectTodos = (state: RootState) => selectAll(state);
export const selectTodo = (id: string | undefined) => (state: RootState) => (id ? selectById(state, id) : null);
