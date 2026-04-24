import { useState } from 'react';
import { requestSubscription } from '../../../api/products-api';
import styles from './email-form.module.css';
import CustomModal from '../../Modal/Modal';

const EmailForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isNewUser, setNewUser] = useState(true);

  const handleSubscribe = async e => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    try {
      const data = await requestSubscription({ email });
      setNewUser(true);
      console.log(data.message);
    } catch (error) {
      console.log(error.response.data.message);
      setNewUser(false);
    } finally {
      setModalIsOpen(true);
    }
  };

  return (
    <div className={styles.left}>
      <p className={styles.formText}>Subscribe and learn about new products!</p>
      <form
        onSubmit={e => {
          handleSubscribe(e);
        }}
      >
        <input
          name="email"
          type="email"
          className={styles.formInput}
          placeholder="Email"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}"
          title="Будь ласка, введіть коректну адресу"
          required
        />
        <button className={styles.btn} type="submit">
          Send
        </button>
        {modalIsOpen &&
          (isNewUser ? (
            <CustomModal isOpen={modalIsOpen} customStyles="newSubscriber" closeModal={() => setModalIsOpen(false)}>
              <h2 className={styles.modalTitle}>
                Thanks for subscribing for <span>new</span> products
              </h2>
              <p className={styles.modalText}>
                We promise you organic and high-quality products that will meet your expectations. Please stay with us
                and we promise you many pleasant surprises.
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
          ))}
      </form>
    </div>
  );
};
export default EmailForm;
