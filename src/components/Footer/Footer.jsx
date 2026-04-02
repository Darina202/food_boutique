import styles from './footer.module.css';
import Logo from '../Logo/Logo';
import SocialList from './SocialList/SocialList';
import EmailForm from './EmailForm/EmailForm';
import style from '../container.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={style.container}>
        <div className={styles.content}>
          <div className={styles.right}>
            <Logo colorClass="footer" />
            <SocialList />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.center}>
              <h4 className={styles.descTitle}>Discover the Variety of Flavors and Quality</h4>
              <p className={styles.desctext}>
                An online store where you will find fresh, natural and delicious products for a healthy life and
                unforgettable gastronomic adventures.
              </p>
            </div>
            <EmailForm />
          </div>
        </div>
        <div className={styles.socket}>
          <p className={styles.opacity}>Food Boutique. All rights reserved.</p>
          <p>
            Privacy Policy <span className={styles.slash}>/</span> Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
