import { useTodo } from "../../hooks/useTodo";
import TodoItem from "../TodoItem/TodoItem";
import st from './TodoItemList.module.css';

const TodoItemList: React.FC = () => {
  const { todos } = useTodo();

  return (
    <ul className={st.list}>
      {todos.map((todo) => (
        <li key={todo.id} className={st.listItem}>
          <TodoItem title={todo.text} id={todo.id} />
        </li>
      ))}
    </ul>
  );
};

export default TodoItemList;
