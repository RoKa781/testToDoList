import { useState, useCallback } from 'react';
import { useModal } from '../../hooks/useModal';
import st from './Modal.module.css';

type ModalProps = {
  closeModal: () => void;
  editHandler: (newText: string) => void;
};

const Modal: React.FC<ModalProps> = ({ closeModal, editHandler }) => {
  const [newText, setNewText] = useState('');

  const handleSave = useCallback(() => {
    if (newText.trim() && !newText.includes('!')) {
      editHandler(newText);
      closeModal();
    }
  }, [newText, editHandler, closeModal]);

  const isSaveDisabled = !newText.trim() || newText.includes('!');

  const { inputRef, handleBackdropClick } = useModal(closeModal, handleSave, isSaveDisabled);

  return (
    <div className={st.modalBackdrop} onClick={handleBackdropClick}>
      <div className={st.modal} tabIndex={0}>
        <h3 className={st.title}>Edit Todo</h3>
        <input
          ref={inputRef}
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="Enter new task text"
          className={st.input}
        />
        <div className={st.modalButtons}>
          <button
            onClick={handleSave}
            className={st.saveButton}
            disabled={isSaveDisabled}
          >
            Save
          </button>
          <button onClick={closeModal} className={st.cancelButton}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
