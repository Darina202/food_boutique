import styles from './header.module.css';
import sprite from '../../img/icons.svg';
import Logo from 'components/Logo/Logo';
import { NavLink } from 'react-router';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <ul className={styles.menu}>
          <li className={styles.btn}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={styles.cart} to="/cart">
              <span className={styles.icon}>
                <svg>
                  <use href={`${sprite}#icon-cart`}></use>
                </svg>
              </span>
              <span className={styles.counter}> Cart (3)</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
