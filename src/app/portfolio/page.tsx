import { Hero } from "@/components/Sections/Hero";
import { OurWorks } from "./components/OurWorks";

import styles from "./styles/index.module.scss";

export default function Portfolio() {
  return (
    <main className={styles.home}>
      <Hero
        title="Выбери работу из списка и мы сделаем ее!"
        descr="Портфолио"
        bgImg="/portfolio-hero-img.jpg"
      />
      <OurWorks />
    </main>
  );
}
