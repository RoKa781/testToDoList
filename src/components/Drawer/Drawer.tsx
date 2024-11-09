import {
  ChangeEvent,
  SyntheticEvent,
  useState,
  useRef,
  useEffect,
} from 'react';
import Button from '../Button/Button';
import st from './Drawer.module.css';
import { useTodo } from '../../hooks/useTodo';

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  anchor: 'left' | 'right';
};

export const Drawer: React.FC<DrawerProps> = ({ open, onClose, anchor }) => {
  const { addTodo } = useTodo();
  const [textValue, setTextValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    if (error) return;
    addTodo(textValue);
    setTextValue('');
    setError(null);
  };

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTextValue(value);

    if (value.includes('!')) {
      setError('The "!" character should not be preserved in the text');
    } else {
      setError(null);
    }
  };

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <>
      <div
        className={`${st.overlay} ${!open ? st.overlayHidden : st.overlayOpen}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        tabIndex={-1}
        className={`${st.drawer} ${open ? st.animate : st.hidden} ${
          anchor === 'left' ? st.left : st.right
        }`}
      >
        <div className={`${st.header} ${open ? st.animate : st.hidden}`}>
          Toolbar
        </div>
        <form
          className={`${st.form} ${open ? '' : st.hidden}`}
          onSubmit={submitHandler}
        >
          <input
            ref={inputRef}
            type="text"
            name="todo"
            className={st.input}
            value={textValue}
            onChange={inputHandler}
            placeholder="todo name"
          />
          {error && <p className={st.error}>{error}</p>}
          <Button title="Add Todo" disabled={!textValue || Boolean(error)} />
        </form>
      </div>
    </>
  );
};
