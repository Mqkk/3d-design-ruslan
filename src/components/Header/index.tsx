"use client";

import { Navigation } from "../Navigation";
import { Button } from "../Button";
import { Logo } from "../Logo";

import { IconHeaderClock, IconHeaderPin } from "@/helpers/icons";
import { scrollToOrder } from "@/helpers/scrollToOrder";

import styles from "./styles/index.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__top}>
          <div className={styles.topItem}>
            <IconHeaderClock />
            <p className={styles.topItem__text}>Работаем круглосуточно</p>
          </div>
          <div className={styles.topItem}>
            <IconHeaderPin />
            <p className={styles.topItem__text}>Барнаул ул Ленина 25</p>
          </div>
        </div>
      </div>

      <div className={styles.header__bottom}>
        <div className={styles.header__bottomContent}>
          <Logo />
          <Navigation />
          <Button
            onClick={scrollToOrder}
            title="Заказать дизайн"
            className={styles.header__button}
          />
        </div>
      </div>
    </header>
  );
};
