import Link from "next/link";
import clsx from "clsx";

import styles from "./styles/index.module.scss";

interface IProps {
  title: string;
  href?: string;
  isLink?: boolean;
  isSmall?: boolean;
  className?: string;
  isSecondary?: boolean;
  onClick: () => void;
}

export const Button = ({
  isSecondary = false,
  isSmall = false,
  isLink = false,
  className = "",
  href = "",
  title,
  onClick,
}: IProps) => {
  const _styles = {
    [styles.button_small]: isSmall,
    [styles.button_secondary]: isSecondary,
  };

  return isLink ? (
    <Link
      className={clsx(styles.button, _styles, className)}
      onClick={onClick}
      href={href}
    >
      {title}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={clsx(styles.button, _styles, className)}
    >
      {title}
    </button>
  );
};
