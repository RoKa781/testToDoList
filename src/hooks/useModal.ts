import { useLayoutEffect, useRef } from 'react';
import { ButtonsEnum } from '@/types';
import useKeyDown from './useHandleKeyDown';

export const useModal = (
  closeModal: () => void,
  handleSave: () => void,
  isSaveDisabled: boolean,
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === ButtonsEnum.ESCAPE) {
      closeModal();
    }
    if (e.key === ButtonsEnum.ENTER && !isSaveDisabled) {
      handleSave();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useKeyDown(handleKeyPress);

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return { inputRef, handleBackdropClick };
};
