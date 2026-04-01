import Hero from 'components/Hero/Hero';
import styles from './layout.module.css';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        {/* <Hero /> */}
        {/* {children} */}
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default Layout;
