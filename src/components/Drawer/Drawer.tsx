import { useTodo } from '@/hooks/useTodo';
import {
  ChangeEvent,
  SyntheticEvent,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import Button from '../Button/Button';
import st from './Drawer.module.css';

type DrawerProps = {
  open: boolean;
  closeHandler: () => void;
  anchor: 'left' | 'right';
};

export const Drawer: React.FC<DrawerProps> = ({ open, closeHandler, anchor }) => {
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

  useLayoutEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <>
      <div
        className={`${st.overlay} ${!open ? st.overlayHidden : st.overlayOpen}`}
        onClick={closeHandler}
        aria-hidden="true"
      />
      <div
        tabIndex={-1}
        className={`${st.drawer} ${open ? st.animate : st.hidden} ${
          anchor === 'left' ? st.left : st.right
        }`}
      >
        <header className={`${st.header} ${open ? st.animate : st.hidden}`}>
          <h2>Toolbar</h2>
        </header>
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
