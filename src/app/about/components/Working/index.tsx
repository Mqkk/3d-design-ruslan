"use client";

import { Button } from "@/components/Button";

import { SUBTITLE, DESCR, TITLE, BUTTON_TITLE } from "./constants";
import { scrollToOrder } from "@/helpers/scrollToOrder";

import styles from "./styles/index.module.scss";

export const Working = () => {
  return (
    <section className={styles.working}>
      <div
        className={styles.working__container}
        style={{ backgroundImage: `url(/about-decor.png)` }}
      >
        <div className={styles.working__content}>
          <span className={styles.working__subtitle}>{SUBTITLE}</span>
          <h2 className={styles.working__title}>{TITLE}</h2>
          <p className={styles.working__descr}>{DESCR}</p>
          <Button
            className={styles.working__button}
            onClick={scrollToOrder}
            title={BUTTON_TITLE}
          />
        </div>
      </div>
    </section>
  );
};
