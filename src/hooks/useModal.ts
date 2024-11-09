import { useEffect, useRef } from 'react';

export const useModal = (
  closeModal: () => void,
  handleSave: () => void,
  isSaveDisabled: boolean
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
      if (e.key === 'Enter' && !isSaveDisabled) {
        handleSave();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [closeModal, handleSave, isSaveDisabled]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return { inputRef, handleBackdropClick };
};

