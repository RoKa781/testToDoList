import { useContext } from 'react';
import TodoContext from '../contexts/TodoProvider';

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('use hook useTodo in TodoProvider');
  }
  return context;
};