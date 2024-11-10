import { useEffect } from 'react';

const useKeyDown = (handler: (e: KeyboardEvent) => void) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      handler(e);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handler]);
};

export default useKeyDown;
