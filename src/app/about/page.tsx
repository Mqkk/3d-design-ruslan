import { Hero } from "@/components/Sections/Hero";

import styles from "./styles/index.module.scss";
import { WeAreFrom } from "./components/WeAreFrom";
import { Working } from "./components/Working";

export default function Portfolio() {
  return (
    <main className={styles.home}>
      <Hero
        title="Узнайте о нас больше, чтобы доверять!"
        descr="О нас"
        bgImg="/about-hero-img.jpg"
      />
      <WeAreFrom />
      <Working />
    </main>
  );
}
