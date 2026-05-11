import Footer from '../Footer/Footer';
import Header from '../Header/Header';
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
