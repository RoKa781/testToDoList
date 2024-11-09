import { useState } from 'react';
import AppHeader from '../../components/AppHeader/AppHeader';
import Button from '../../components/Button/Button';
import { Drawer } from '../../components/Drawer/Drawer';
import TodoItemList from '../../components/TodoItemList/TodoItemList';
import st from './MainPage.module.css';
import { TodoProvider } from '../../contexts/TodoProvider';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const changeDrawerVisibility = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <TodoProvider>
        <AppHeader />
        <main className={st.main}>
          <div className={st.mainContainer}>
            <Button title="Add todo" clickHandler={changeDrawerVisibility} />
            <TodoItemList />
          </div>
          <Drawer
            open={isOpen}
            onClose={changeDrawerVisibility}
            anchor={'left'}
          />
        </main>
      </TodoProvider>
    </>
  );
};

export default MainPage;
