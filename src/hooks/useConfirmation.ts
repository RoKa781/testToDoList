import { ButtonsEnum } from '@/types';
import useKeyDown from './useHandleKeyDown';

const useConfirmation = (onConfirm: () => void, onCancel: () => void) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === ButtonsEnum.ESCAPE) {
      onCancel();
    } else if (e.key === ButtonsEnum.ENTER) {
      onConfirm();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  useKeyDown(handleKeyDown);

  return {
    handleOverlayClick,
  };
};

export default useConfirmation;
