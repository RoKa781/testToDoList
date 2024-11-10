import { useTodo } from '@/hooks/useTodo';
import { useState } from 'react';
import DeleteButton from '../DeleteButton/DeleteButton';
import EditButton from '../EditButton/EditButton';
import st from './TodoItem.module.css';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

type TItem = {
  id: string;
  title: string;
};

const TodoItem: React.FC<TItem> = ({ id, title }) => {
  const { editTodo, deleteTodo } = useTodo();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleEdit = (newText: string) => {
    editTodo(id, newText);
  };

  const handleDelete = () => {
    setIsDialogOpen(true);
  };

  const confirmDelete = () => {
    deleteTodo(id);
    setIsDialogOpen(false);
  };

  const cancelDelete = () => {
    setIsDialogOpen(false);
  };

  return (
    <article className={st.listItem}>
      <h2 className={st.title}>{title}</h2>
      <EditButton editHandler={handleEdit} />
      <DeleteButton deleteHandler={handleDelete} />

      {isDialogOpen && (
        <ConfirmationModal
          message="Are you sure you want to delete this todo?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </article>
  );
};

export default TodoItem;
