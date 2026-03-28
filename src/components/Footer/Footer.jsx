import styles from './footer.module.css';
import sprite from '../../img/icons.svg';
const Footer = () => {
  return (
    <div>
      <a className={styles.logo} href="./">
        <span className={styles.icon}>
          <svg width="20" height="20">
            <use href={`${sprite}#icon-logo`}></use>
          </svg>
        </span>
        Food Boutique
      </a>
      <ul>
        <li>
          <a href="">
            <svg className={styles.style} width="28" height="28">
              <use href={`${sprite}#icon-facebook`} />
            </svg>
          </a>
        </li>
        <li>
          <a href="">
            <svg className={styles.style} width="28" height="28">
              <use href={`${sprite}#icon-instagram`} />
            </svg>
          </a>
        </li>
        <li>
          <a href="">
            <svg className={styles.style} width="28" height="28">
              <use href={`${sprite}#icon-youtube`} />
            </svg>
          </a>
        </li>
      </ul>
      <p>Logo</p>

      <p>Description</p>
      <p>Email</p>
    </div>
  );
};
export default Footer;
