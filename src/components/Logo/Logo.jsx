import { Link } from 'react-router';
import sprite from '../../img/icons.svg';
import styles from './logo.module.css';

const Logo = ({ colorClass }) => {
  return (
    <>
      <Link className={`${styles.logo} ${styles[colorClass]}`} to="./">
        <span className={styles.icon}>
          <svg>
            <use href={`${sprite}#icon-logo`}></use>
          </svg>
        </span>
        Food Boutique
      </Link>
    </>
  );
};
export default Logo;
