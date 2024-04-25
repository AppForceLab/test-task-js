import { Transition } from 'react-transition-group';

import sprite from '../../images/icons/sprite.svg';

import styles from './ModalWindow.module.css';

export const ModalWindow = ({ isOpen, onClose, children }) => {
  const handleBackdropClick = (event) => {
    if (event.target.classList.contains('backdrop')) onClose();
  };

  return (
    <>
      <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        {(state) => (
          <div
            className={`${styles.modalContainer} ${
              styles[`modal--${state}`]
            } backdrop`}
            onClick={handleBackdropClick}
          >
            <div className={styles.modalContent}>
              <button
                className={styles.modalCloseButton}
                onClick={() => onClose()}
              >
                <svg width="32" height="32">
                  <use xlinkHref={`${sprite}#close`} />
                </svg>
              </button>
              {children}
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};
