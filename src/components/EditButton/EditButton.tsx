import { useState } from 'react';
import st from './EditButton.module.css';
import Modal from '../Modal/Modal';

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
        <svg
          style={{ fill: 'var(--accent-modules-color)' }}
          height="20px"
          width="20px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 306.637 306.637"
        >
          <g id="SVGRepo_iconCarrier">
            <path d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896 l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"></path>
            <path d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095 L265.13,75.602L231.035,41.507z"></path>
          </g>
        </svg>
      </button>

      {isModalOpen && (
        <Modal closeModal={closeModal} editHandler={editHandler} />
      )}
    </>
  );
};

export default EditButton;
