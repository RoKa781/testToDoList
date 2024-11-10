import { nanoid } from 'nanoid';
import { createContext, useState, ReactNode } from 'react';
import { Todo } from '@/types';

type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo = { id: nanoid(), text };
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo,
      ),
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
