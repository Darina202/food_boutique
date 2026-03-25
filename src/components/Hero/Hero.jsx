import heroImg from "../../img/hero/hero-desktop.jpg";
const Hero = () => {
  return (
    <div>
      <h1>Welcome to the Food Boutique!</h1>
      <p>
        With Food Boutique, you're not just subscribing to food, you're signing
        up for a fresher, fitter, and happier you.
      </p>
      <img src={heroImg} />
    </div>
  );
};
export default Hero;
