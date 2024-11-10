import { useState } from 'react';
import Modal from '../Modal/Modal';
import st from './EditButton.module.css';
import PencilSVG from '../PencilSVG/PencilSVG';

type TEditButton = {
  editHandler: (newText: string) => void;
};

const EditButton: React.FC<TEditButton> = ({ editHandler }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button className={st.editButton} onClick={openModal}>
        <PencilSVG />
      </button>

      {isModalOpen && (
        <Modal closeModal={closeModal} editHandler={editHandler} />
      )}
    </>
  );
};

export default EditButton;
