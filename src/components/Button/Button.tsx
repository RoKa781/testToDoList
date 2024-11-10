import st from './Button.module.css';

type TButtonProps = {
    title: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<TButtonProps> = ({ title, onClick, disabled = false }) => {
  return (
    <button className={st.button} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
