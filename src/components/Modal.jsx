import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ show, onClose, title, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>{title}</h3>
          <button className={styles.closeButton} onClick={onClose}>&times;</button>
        </div>
        <div className={styles.modalBody}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;