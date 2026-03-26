import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import styles from './layout.module.css';

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};
export default Layout;
