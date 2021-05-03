import axios from 'axios';

import { Todo } from './types';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const getTodos = async () => {
  try {
    return await axios.get(`${baseUrl}/todos`).then((response) => response.data);
  } catch (error: unknown) {
    console.error(error);
  }
};

export const getTodo = (id: number) => {
  try {
    return axios.get(`${baseUrl}/todos/${id}`).then((response) => response.data);
  } catch (error: unknown) {
    console.error(error);
  }
};

export const updateTodo = (id: number, todo: Todo) => {
  try {
    return axios.put<Todo>(`${baseUrl}/todos/${id}`, todo);
  } catch (error: unknown) {
    console.error(error);
  }
};

export const createTodo = (id: number, todo: Todo) => {
  try {
    return axios.post<Todo>(`${baseUrl}/todos`, todo);
  } catch (error: unknown) {
    console.error(error);
  }
};
