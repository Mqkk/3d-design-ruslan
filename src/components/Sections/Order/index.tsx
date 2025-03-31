"use client";

import { useState, useEffect } from "react";
import { useActionState } from "react";
import clsx from "clsx";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import { DESCR, LIST, SUBTITLE, TITLE } from "./constants";
import { submitOrder } from "./action";

import styles from "./styles/index.module.scss";

export const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    order: "",
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const initialState = { error: null, success: null } as {
    error?: string | null;
    success?: string | null;
  };

  const [state, formAction, isPending] = useActionState(
    submitOrder,
    initialState
  );

  const handleChange = (field: keyof typeof formData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    if (state.success) {
      setSuccessMessage(state.success);
      setFormData({ name: "", email: "", phone: "", order: "" });

      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.success]);

  return (
    <section className={styles.order} id="order">
      <div className={styles.order__container}>
        <div className={styles.order__content}>
          <span className={styles.order__subtitle}>{SUBTITLE}</span>
          <h2 className={styles.order__title}>{TITLE}</h2>
          <p className={styles.order__descr}>{DESCR}</p>
          <ul className={styles.order__list}>
            {LIST.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item.icon}
                <div className={styles.listItem__content}>
                  <h3 className={styles.listItem__title}>{item.title}</h3>
                  <p className={styles.listItem__info}>{item.info}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form action={formAction} className={styles.order__form}>
          <div className={styles.order__formTop}>
            <Input
              placeholder="Руслан"
              label="Имя"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange("name")}
              required
            />
            <Input
              placeholder="email@mail.ru"
              label="Email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange("email")}
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            />
          </div>
          <Input
            className={clsx(styles.form__input, styles.form__input_phone)}
            placeholder="+7 999 999 99 99"
            label="Телефон"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange("phone")}
            required
          />
          <Input
            className={clsx(styles.form__input, styles.form__input_textarea)}
            placeholder="Какой вид услуги вам нужен, с какой целью"
            label="Ваш заказ"
            isTextarea
            id="order"
            name="order"
            value={formData.order}
            onChange={handleChange("order")}
            required
          />
          <Button
            className={styles.order__button}
            onClick={() => {}}
            type="submit"
            isSecondary
            isBig
            title={isPending ? "Отправка..." : "Оставить заявку"}
            disabled={isPending}
          />
          {state.error && <p className={styles.order__error}>{state.error}</p>}
          {successMessage && (
            <p className={styles.order__success}>{successMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
};
