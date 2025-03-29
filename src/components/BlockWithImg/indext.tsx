import Image from "next/image";

import { IconCheckGreen } from "@/helpers/icons";

import styles from "./styles/index.module.scss";

interface IProps {
  imgSrc: string;
  alt: string;
  title: string;
  descr: string;
  list: string[];
  subtitle: string;
}

export const BlockWithImg = ({
  imgSrc,
  alt,
  title,
  descr,
  list,
  subtitle,
}: IProps) => {
  return (
    <div className={styles.block}>
      <div className={styles.block__container}>
        <div className={styles.block__content}>
          <span className={styles.block__subtitle}>{subtitle}</span>
          <h2 className={styles.block__title}>{title}</h2>
          <p className={styles.block__descr}>{descr}</p>
          <ul className={styles.block__list}>
            {list.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <IconCheckGreen />
                <p className={styles.listItem__text}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <Image
          alt={alt}
          width={600}
          height={600}
          src={imgSrc}
          className={styles.block__img}
        />
      </div>
    </div>
  );
};
