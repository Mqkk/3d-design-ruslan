"use client";

import { Button } from "@/components/Button";
import { LIST, SUBTITLE, TITLE } from "./constants";

import styles from "./styles/index.module.scss";

export const OurWorks = () => {
  return (
    <section className={styles.works}>
      <div className={styles.works__container}>
        <div className={styles.works__top}>
          <span className={styles.works__subtitle}>{SUBTITLE}</span>
          <h2 className={styles.works__title}>{TITLE}</h2>
        </div>
        <div className={styles.works__content}>
          <ul className={styles.works__list}>
            {LIST.map((item) => (
              <li
                key={item.id}
                className={styles.item}
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className={styles.item__content}>
                  <div className={styles.item__left}>
                    <h3 className={styles.item__title}>{item.title}</h3>
                    <span className={styles.item__price}>от {item.price}$</span>
                  </div>
                  <Button
                    className={styles.item__button}
                    onClick={() => {}}
                    isSecondary
                    isSmall
                    title="Хочу эту"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
