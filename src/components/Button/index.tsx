import Link from "next/link";
import clsx from "clsx";

import styles from "./styles/index.module.scss";

interface IProps {
  title: string;
  href?: string;
  isBig?: boolean;
  isLink?: boolean;
  isSmall?: boolean;
  disabled?: boolean;
  className?: string;
  isSecondary?: boolean;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
}

export const Button = ({
  isSecondary = false,
  disabled = false,
  isSmall = false,
  isLink = false,
  isBig = false,
  type = "button",
  className = "",
  href = "",
  title,
  onClick,
}: IProps) => {
  const _styles = {
    [styles.button_small]: isSmall,
    [styles.button_secondary]: isSecondary,
    [styles.button_big]: isBig,
    [styles.button_disabled]: disabled,
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
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(styles.button, _styles, className)}
    >
      {title}
    </button>
  );
};
