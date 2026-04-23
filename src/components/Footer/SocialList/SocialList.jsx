import sprite from '../../../img/icons.svg';
import styles from './social-list.module.css';
import { Link } from 'react-router';

const SocialList = () => {
  return (
    <ul className={styles.socialList}>
      <li className={styles.social}>
        <Link to="https://www.facebook.com" target="_blank">
          <svg className={styles.style}>
            <use href={`${sprite}#icon-facebook`} />
          </svg>
        </Link>
      </li>
      <li className={styles.social}>
        <Link to="https://www.instagram.com/ " target="_blank">
          <svg className={styles.style}>
            <use href={`${sprite}#icon-instagram`} />
          </svg>
        </Link>
      </li>
      <li className={styles.social}>
        <Link to="https://www.youtube.com/" target="_blank">
          <svg className={styles.style}>
            <use href={`${sprite}#icon-youtube`} />
          </svg>
        </Link>
      </li>
    </ul>
  );
};
export default SocialList;
