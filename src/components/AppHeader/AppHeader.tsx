import reactSvg from '@/assets/react.svg';
import st from './AppHeader.module.css';

const AppHeader = () => {
  return (
    <header className={st.header}>
      <h1 className={st.title}>ToDo List</h1>
      <img src={reactSvg} alt="React Logo" className={st.reactLogo} />
    </header>
  );
};

export default AppHeader;
