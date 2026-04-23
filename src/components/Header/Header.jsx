import styles from './header.module.css';
import sprite from '../../img/icons.svg';
import Logo from 'components/Logo/Logo';
import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';
import { selectCartProducts } from '../../redux/cart/cart-selectors';

const Header = () => {
  const { cartItems } = useSelector(selectCartProducts);

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
              <span className={styles.counter}> Cart ({cartItems.length})</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
