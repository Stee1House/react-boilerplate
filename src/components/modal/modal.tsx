import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen: boolean;
}

export const Modal: FC<ModalProps> = ({ isOpen, className, children }) =>
  isOpen ? <div className={clsx(styles.modal, className)}>{children}</div> : null;
