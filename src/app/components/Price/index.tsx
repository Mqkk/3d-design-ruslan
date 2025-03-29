import { IconArrowRightInCircle } from "@/helpers/icons";
import { LIST, SUBTITLE, TITLE } from "./constants";

import styles from "./styles/index.module.scss";

export const Price = () => {
  return (
    <section className={styles.price}>
      <div className={styles.price__container}>
        <div className={styles.price__top}>
          <span className={styles.price__subtitle}>{SUBTITLE}</span>
          <h2 className={styles.price__title}>{TITLE}</h2>
        </div>

        <div className={styles.price__content}>
          <ul className={styles.price__list}>
            {LIST.map((item, index) => (
              <li className={styles.card} key={index}>
                <div className={styles.card__top}>
                  <h3 className={styles.card__title}>{item.title}</h3>
                  <p className={styles.card__descr}>{item.descr}</p>
                  <div className={styles.card__price}>
                    <span className={styles.card__priceLeft}>От</span>
                    <span className={styles.card__priceRight}>
                      ${item.price}
                    </span>
                  </div>
                </div>

                <ul className={styles.card__list}>
                  {item.list.map((listItem, index) => (
                    <li className={styles.card__listItem} key={index}>
                      <IconArrowRightInCircle />
                      <p className={styles.card__listItemText}>{listItem}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
