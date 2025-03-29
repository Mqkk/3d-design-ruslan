import Link from "next/link";

import { ROUTES } from "@/constants/routes";
import { IconLogo } from "@/helpers/icons";

import styles from "./styles/index.module.scss";

export const Logo = () => {
  return (
    <Link href={ROUTES.Home} className={styles.logo}>
      <IconLogo />
      <span className={styles.logo__text}>3D Дизайн</span>
    </Link>
  );
};
