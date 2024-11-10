import AppLayout from '@/components/AppLayout/AppLayout';
import Button from '@/components/Button/Button';
import { Drawer } from '@/components/Drawer/Drawer';
import TodoItemList from '@/components/TodoItemList/TodoItemList';
import { TodoProvider } from '@/contexts/TodoProvider';
import { useState } from 'react';
import st from './MainPage.module.css';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const changeDrawerVisibility = () => {
    setIsOpen((prev) => !prev);
  };

  return (
      <AppLayout>
        <TodoProvider>
          <div className={st.mainContainer}>
            <Button title="Add todo" onClick={changeDrawerVisibility} />
            <TodoItemList />
          </div>
          <Drawer
            open={isOpen}
            closeHandler={changeDrawerVisibility}
            anchor={'left'}
          />
        </TodoProvider>
      </AppLayout>
  );
};

export default MainPage;
