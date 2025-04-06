"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/Button";

import { SUBTITLE, TITLE } from "./constants";

import styles from "./styles/index.module.scss";

interface WorkItem {
  name: string;
  cost: string;
  img: string;
  id: number;
}

export const OurWorks = () => {
  const [works, setWorks] = useState<WorkItem[]>([]);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await fetch("http://212.109.195.50:8000/api/v1/cases");
        if (!response.ok) {
          throw new Error("Ошибка при загрузке данных");
        }
        const data: WorkItem[] = await response.json();
        console.log(data);
        setWorks(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchWorks();
  }, []);

  return (
    <section className={styles.works}>
      <div className={styles.works__container}>
        <div className={styles.works__top}>
          <span className={styles.works__subtitle}>{SUBTITLE}</span>
          <h2 className={styles.works__title}>{TITLE}</h2>
        </div>
        <div className={styles.works__content}>
          <ul className={styles.works__list}>
            {works.map((item) => (
              <li
                key={item.id}
                className={styles.item}
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className={styles.item__content}>
                  <div className={styles.item__left}>
                    <h3 className={styles.item__title}>{item.name}</h3>
                    <span className={styles.item__price}>от {item.cost}$</span>
                  </div>
                  <Button
                    disabled
                    className={styles.item__button}
                    onClick={() => {}}
                    isSecondary
                    isSmall
                    title="Хочу эту"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
