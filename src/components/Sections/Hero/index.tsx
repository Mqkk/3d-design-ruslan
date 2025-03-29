import styles from "./styles/index.module.scss";

interface IProps {
  descr: string;
  title: string;
  bgImg: string;
}

export const Hero = ({ descr, title, bgImg }: IProps) => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <p className={styles.hero__descr}>{descr}</p>
          <h1 className={styles.hero__title}>{title}</h1>
        </div>
      </div>
    </section>
  );
};
