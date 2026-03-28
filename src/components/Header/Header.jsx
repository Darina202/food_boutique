import styles from './header.module.css';
import sprite from '../../img/icons.svg';
const Header = () => {
  return (
    <div className={styles.header}>
      <a className={styles.logo} href="./">
        <span className={styles.icon}>
          <svg width="20" height="20">
            <use href={`${sprite}#icon-logo`}></use>
          </svg>
        </span>
        Food Boutique
      </a>
      <div className={styles.menu}>
        <a className={styles.btn}>Home</a>
        <a className={styles.cart}>Cart (3)</a>
      </div>
    </div>
  );
};
export default Header;
