import Image from "next/image";
import styles from "./heroImage.module.css";

const { heroContent, heroImage, heroWrapper } = styles;

const IMAGE_URL = "https://www.perssondennis.com/images/perfect-avocado.webp";

const HeroImage = () => {
  return (
    <div className={heroWrapper}>
      <Image
        className={heroImage}
        priority
        src={IMAGE_URL}
        fill={true}
        alt="hero image example"
      />

      <div className={heroContent}>
        <h1>Hero Image</h1>
        <p>Next.js hero image example.</p>
      </div>
    </div>
  );
};

export default HeroImage;
