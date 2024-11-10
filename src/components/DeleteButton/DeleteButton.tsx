import TrashcanSVG from '../TrashcanSVG/TrashcanSVG';
import st from './DeleteButton.module.css';

type TDeleteButton = {
  deleteHandler: () => void
}

const DeleteButton:React.FC<TDeleteButton> = ({ deleteHandler }) => {
  return (
    <button className={st.deleteButton} onClick={deleteHandler}>
      <TrashcanSVG />
    </button>
  );
};

export default DeleteButton;
