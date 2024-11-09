import st from './Button.module.css';

type TButtonProps = {
    title: string;
    clickHandler?: () => void;
    disabled?: boolean;
}

const Button: React.FC<TButtonProps> = ({ title, clickHandler, disabled = false }) => {
  return (
    <button className={st.button} onClick={clickHandler} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
