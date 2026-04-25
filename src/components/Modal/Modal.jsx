import styles from './modal.module.css';
import sprite from '../../img/icons.svg';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CustomModal = ({ isOpen = false, closeModal, customStyles = '', children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={`${styles.modal} ${styles[customStyles]}`}
      overlayClassName={styles.overlay}
      contentLabel="Example Modal"
    >
      <button onClick={closeModal} className={styles.closeBtn}>
        <svg className={styles.closeIcon}>
          <use href={`${sprite}#icon-close`}></use>
        </svg>
      </button>
      <div className={styles.cont}>{children}</div>
    </Modal>
  );
};
export default CustomModal;
