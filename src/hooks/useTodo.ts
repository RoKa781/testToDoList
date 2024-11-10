import TodoContext from '@/contexts/TodoProvider';
import { useContext } from 'react';

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('use hook useTodo in TodoProvider');
  }
  return context;
};