import { useState } from 'react';
import styles from './order-form.module.css';
import OrderModal from './OrderModal/OrderModal';
import { requestOrder } from '../../api/products-api';

const CartOrderForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubscribe = async e => {
    e.preventDefault();
    const form = e.target;
    const email = e.target.elements.email.value;
    try {
      const data = await requestOrder({ email });
      console.log(data.message);
    } catch (error) {
      console.log(error.response.data.message);
    } finally {
      form.reset();
      setModalIsOpen(true);
    }
  };

  return (
    <div className={styles.makeOrder}>
      <h3 className={styles.formTitle}>Your Order</h3>
      <div className={styles.totalAmount}>
        <p className={styles.text}>Total</p>
        <p className={styles.amount}>
          <span>Sum: </span>$12,94
        </p>
      </div>
      <form className={styles.orderForm} onSubmit={handleSubscribe}>
        <div className={styles.inputField}>
          <input name="email" type="email" className={styles.formInput} placeholder="Enter your email" required />
        </div>

        <button className={styles.btn} type="submit">
          Checkout
        </button>
      </form>
      <OrderModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  );
};
export default CartOrderForm;
