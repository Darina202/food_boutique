import sprite from '../../img/icons.svg';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Welcome to the <span>Food</span> Boutique!
      </h1>
      <p className={styles.text}>
        With Food Boutique, you're not just subscribing to food, you're signing up for a fresher, fitter, and happier
        you.
      </p>
      <div className={styles.box}>
        <svg className={styles.mark} width="100" height="100">
          <use href={`${sprite}#icon-organic-food`}></use>
        </svg>
      </div>
    </section>
  );
};
export default Hero;
