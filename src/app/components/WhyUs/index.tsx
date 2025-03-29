import { BlockWithImg } from "@/components/BlockWithImg/indext";

import {
  DATA_LIST,
  SUBTITLE,
  SRC_IMG,
  DESCR,
  TITLE,
  LIST,
  ALT,
} from "./constants";

import styles from "./styles/index.module.scss";

export const WhyUs = () => {
  return (
    <section className={styles.why}>
      <div className={styles.why__container}>
        <BlockWithImg
          alt={ALT}
          list={LIST}
          title={TITLE}
          descr={DESCR}
          imgSrc={SRC_IMG}
          subtitle={SUBTITLE}
        />
        <div className={styles.why__data}>
          {DATA_LIST.map((item, index) => {
            return (
              <div key={index} className={styles.dataItem}>
                <span className={styles.dataItem__value}>{item.value}+</span>
                <p className={styles.dataItem__text}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
