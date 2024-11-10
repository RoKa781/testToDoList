import useConfirmation from '@/hooks/useConfirmation';
import ReactDOM from 'react-dom';
import st from './ConfirmationModal.module.css';

interface ConfirmationModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ message, onConfirm, onCancel }) => {
  const { handleOverlayClick } = useConfirmation(onConfirm, onCancel);

  return ReactDOM.createPortal(
    <div className={st.overlay} onClick={handleOverlayClick}>
      <div className={st.dialog}>
        <h3 className={st.title}>{message}</h3>
        <button onClick={onConfirm} className={st.confirmButton}>Confirm</button>
        <button onClick={onCancel} className={st.cancelButton}>Cancel</button>
      </div>
    </div>,
    document.body
  );
};

export default ConfirmationModal;


