import React from 'react';
import st from './ConfirmationModal.module.css';
import useConfirmation from '../../hooks/useConfirmation';

interface ConfirmationModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ message, onConfirm, onCancel }) => {
  const { handleOverlayClick } = useConfirmation(onConfirm, onCancel);

  return (
    <div className={st.overlay} onClick={handleOverlayClick}>
      <div className={st.dialog}>
        <h3 className={st.title}>{message}</h3>
        <button onClick={onConfirm} className={st.confirmButton}>Confirm</button>
        <button onClick={onCancel} className={st.cancelButton}>Cancel</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;


