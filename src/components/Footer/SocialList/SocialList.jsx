import sprite from '../../../img/icons.svg';
import styles from './social-list.module.css';
import { Link } from 'react-router';

const SocialList = () => {
  return (
    <ul className={styles.socialList}>
      <li className={styles.social}>
        <Link to="https://www.facebook.com">
          <svg className={styles.style} width="28" height="28">
            <use href={`${sprite}#icon-facebook`} />
          </svg>
        </Link>
      </li>
      <li className={styles.social}>
        <Link to="https://www.instagram.com/">
          <svg className={styles.style} width="28" height="28">
            <use href={`${sprite}#icon-instagram`} />
          </svg>
        </Link>
      </li>
      <li className={styles.social}>
        <Link to="https://www.youtube.com/">
          <svg className={styles.style} width="28" height="28">
            <use href={`${sprite}#icon-youtube`} />
          </svg>
        </Link>
      </li>
    </ul>
  );
};
export default SocialList;
