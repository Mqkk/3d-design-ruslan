import { BlockWithImg } from "@/components/BlockWithImg/indext";

import { SUBTITLE, SRC_IMG, DESCR, TITLE, LIST, ALT } from "./constants";

import styles from "./styles/index.module.scss";

export const WeAreFrom = () => {
  return (
    <section className={styles.weAreFrom}>
      <div className={styles.weAreFrom__container}>
        <BlockWithImg
          alt={ALT}
          list={LIST}
          title={TITLE}
          descr={DESCR}
          imgSrc={SRC_IMG}
          subtitle={SUBTITLE}
          isReverse
        />
      </div>
    </section>
  );
};
