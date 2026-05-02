import { Link } from 'react-router';
import style from '../../components/container.module.css';
import styles from './not-found-page.module.css';
import notFound from '../../img/not-found.jpg';

const NotFoundPage = () => {
  return (
    <div className={style.container}>
      <div className={styles.notFound}>
        <img src={notFound} alt="Empty cart pic" className={styles.img} />
        <div className={styles.notification}>
          <h1 className={styles.title}>
            Ooops! This page seems to be <span>missing</span>
          </h1>
          <p className={styles.text}>
            We couldn't find the information you're looking for. It might have been moved, deleted, or never existed.
          </p>
          <Link to="/" className={styles.btn}>
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFoundPage;
