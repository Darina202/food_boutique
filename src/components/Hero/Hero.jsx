import heroImg from '../../img/hero/hero-desktop.jpg';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <div>
      <h1 className={styles.title}>
        Welcome to the <span className={styles.titleColor}>Food</span> Boutique!
      </h1>
      <p>
        With Food Boutique, you're not just subscribing to food, you're signing
        up for a fresher, fitter, and happier you.
      </p>
      <img src={heroImg} alt="Fresh vegetables in Food Boutique" />
    </div>
  );
};
export default Hero;
