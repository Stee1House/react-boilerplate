import { FC, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

export const ModalContainer: FC = ({ children }) => {
  const el = document.createElement('div');

  useLayoutEffect(() => {
    const modalRoot = document.getElementById('modal');

    modalRoot?.appendChild(el);
    return () => {
      modalRoot?.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(children, el);
};
