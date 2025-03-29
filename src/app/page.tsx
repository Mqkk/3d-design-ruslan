import { Hero } from "@/components/Sections/Hero";
import { Creative } from "./components/Creative";
import { Price } from "./components/Price";
import { WhyUs } from "./components/WhyUs";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero
        title="3D дизайн любой сложности. Качественно!"
        descr="Лучший Дизайн"
        bgImg="/home-hero-img.jpg"
      />
      <WhyUs />
      <Creative />
      <Price />
    </main>
  );
}
