"use client";

import { Navigation } from "../Navigation";
import { Button } from "../Button";
import { Logo } from "../Logo";

import styles from "./styles/index.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__top}>
          <Logo />
          <Navigation />
          <Button
            isSmall
            title="Наверх"
            onClick={() => {}}
            className={styles.footer__button}
          />
        </div>
        <div className={styles.footer__bottom}>
          <p className={styles.footer__text}>©2025 Руслан Терехов</p>
        </div>
      </div>
    </footer>
  );
};
