"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

import { ROUTES } from "@/constants/routes";

import styles from "./styles/index.module.scss";

const NAV_LIST = [
  { name: "Главная", route: ROUTES.Home },
  { name: "Портфолио", route: ROUTES.Portfolio },
  { name: "О нас", route: ROUTES.About },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {NAV_LIST.map(({ name, route }) => (
          <li key={route} className={styles.nav__item}>
            <Link
              href={route}
              className={clsx(
                styles.nav__link,
                pathname === route && styles.nav__link_active
              )}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
