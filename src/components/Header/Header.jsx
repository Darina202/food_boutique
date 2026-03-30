import styles from './header.module.css';
import sprite from '../../img/icons.svg';
import Logo from 'components/Logo/Logo';
import { NavLink } from 'react-router';
const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <nav>
        <ul className={styles.menu}>
          <li className={styles.btn}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={styles.cart} to="/cart">
              <span className={styles.icon}>
                <svg width="18" height="18">
                  <use href={`${sprite}#icon-cart`}></use>
                </svg>
              </span>
              Cart (3)
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
