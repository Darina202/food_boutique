import styles from './footer.module.css';
import sprite from '../../img/icons.svg';
import Logo from '../Logo/Logo';
import { Link } from 'react-router';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.right}>
        <Logo colorClass="footer" />
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
      </div>

      <p>Description</p>
      <p>Email</p>
    </div>
  );
};
export default Footer;
