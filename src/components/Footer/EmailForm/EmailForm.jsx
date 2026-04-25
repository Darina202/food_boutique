import { useState } from 'react';
import { requestSubscription } from '../../../api/products-api';
import styles from './email-form.module.css';
import SubscribeModal from './SubscribeModal/SubscribeModal';

const EmailForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isNewUser, setNewUser] = useState(true);

  const handleSubscribe = async e => {
    e.preventDefault();
    const form = e.target;
    const email = e.target.elements.email.value;
    try {
      const data = await requestSubscription({ email });
      setNewUser(true);
      console.log(data.message);
    } catch (error) {
      console.log(error.response.data.message);
      setNewUser(false);
    } finally {
      form.reset();
      setModalIsOpen(true);
    }
  };

  return (
    <div className={styles.left}>
      <p className={styles.formText}>Subscribe and learn about new products!</p>
      <form onSubmit={handleSubscribe}>
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
      </form>
      <SubscribeModal isNewUser={isNewUser} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  );
};
export default EmailForm;
