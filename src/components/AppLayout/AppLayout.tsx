import { ReactNode } from 'react';
import st from './AppLayout.module.css';
import AppHeader from '../AppHeader/AppHeader';

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <main className={st.main}>{children}</main>
    </>
  );
};

export default AppLayout;
