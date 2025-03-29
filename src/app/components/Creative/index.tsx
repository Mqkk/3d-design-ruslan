"use client";

import { Button } from "@/components/Button";

import { BUTTON_TITLE, DESCR, LIST, SUBTITLE, TITLE } from "./constants";
import { ROUTES } from "@/constants/routes";

import styles from "./styles/index.module.scss";

export const Creative = () => {
  return (
    <section className={styles.creative}>
      <div className={styles.creative__container}>
        <div className={styles.creative__top}>
          <span className={styles.creative__subtitle}>{SUBTITLE}</span>
          <h2 className={styles.creative__title}>{TITLE}</h2>
          <div className={styles.creative__info}>
            <p className={styles.creative__descr}>{DESCR}</p>
            <Button
              className={styles.creative__button}
              href={ROUTES.Portfolio}
              title={BUTTON_TITLE}
              onClick={() => {}}
              isSecondary
              isLink
            />
          </div>
        </div>
        <div className={styles.creative__content}>
          <ul className={styles.creative__list}>
            {LIST.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item.icon}
                <h3 className={styles.listItem__title}>{item.title}</h3>
                <p className={styles.listItem__descr}>{item.descr}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
