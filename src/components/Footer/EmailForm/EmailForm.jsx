import styles from './email-form.module.css';

const EmailForm = () => {
  return (
    <div className={styles.left}>
      <p className={styles.formText}>Subscribe and learn about new products!</p>
      <form>
        <label>
          <input type="text" className={styles.formInput} placeholder="Email" />
        </label>
        <button className={styles.btn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
export default EmailForm;
