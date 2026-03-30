import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
