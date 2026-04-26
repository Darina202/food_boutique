import CustomModal from 'components/Modal/Modal';
import styles from './order-modal.module.css';
import CartModalImage from '../../../img/checkout-image.png';
import CartModalImage2x from '../../../img/checkout-image2x.png';

const OrderModal = ({ modalIsOpen, setModalIsOpen }) => {
  return (
    <CustomModal isOpen={modalIsOpen} customStyles="orderModal" closeModal={() => setModalIsOpen(false)}>
      <picture className={styles.picture}>
        <img
          src={CartModalImage}
          srcSet={`${CartModalImage} 1x, ${CartModalImage2x} 2x`}
          alt="Empty cart pic"
          className={styles.img}
        />
        <div></div>
      </picture>
      <h2 className={styles.modalTitle}>Order success</h2>
      <p className={styles.modalText}>
        Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for
        you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We're thrilled to be part of
        your journey to better health and happiness.
      </p>
    </CustomModal>
  );
};

export default OrderModal;
