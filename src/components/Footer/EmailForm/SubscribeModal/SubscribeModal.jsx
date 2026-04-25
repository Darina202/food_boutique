import CustomModal from '../../../Modal/Modal';
import styles from './subscribe-modal.module.css';

const SubscribeModal = ({ isNewUser, modalIsOpen, setModalIsOpen }) => {
  return isNewUser ? (
    <CustomModal isOpen={modalIsOpen} customStyles="newSubscriber" closeModal={() => setModalIsOpen(false)}>
      <h2 className={styles.modalTitle}>
        Thanks for subscribing for <span>new</span> products
      </h2>
      <p className={styles.modalText}>
        We promise you organic and high-quality products that will meet your expectations. Please stay with us and we
        promise you many pleasant surprises.
      </p>
    </CustomModal>
  ) : (
    <CustomModal isOpen={modalIsOpen} customStyles="existSubscriber" closeModal={() => setModalIsOpen(false)}>
      <h2 className={styles.modalTitle}>
        This <span>email address</span> has already been entered
      </h2>
      <p className={styles.modalText}>
        You have already subscribed to our new products. Watch for offers at the mailing address.
      </p>
    </CustomModal>
  );
};

export default SubscribeModal;
