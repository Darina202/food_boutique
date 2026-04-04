import Hero from 'components/Hero/Hero';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import style from '../container.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <div className={style.container}>
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};
export default Layout;
