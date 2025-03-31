"use client";

import { InputMask } from "@react-input/mask";
import clsx from "clsx";

import styles from "./styles/index.module.scss";

interface IProps {
  placeholder?: string;
  className?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  isTextarea?: boolean;
  id: string;
  name: string;
  required?: boolean;
  mask?: string;
  pattern?: string;
}

export const Input = ({
  placeholder,
  className,
  value,
  label,
  onChange,
  isTextarea = false,
  id,
  name,
  required,
  mask,
  pattern,
}: IProps) => {
  return (
    <div className={clsx(styles.inputWrapper, className)}>
      {label && (
        <label htmlFor={id} className={styles.inputLabel}>
          {label}
        </label>
      )}
      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          className={clsx(styles.input, styles.input_textarea)}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
        />
      ) : mask ? (
        <InputMask
          id={id}
          name={name}
          mask={mask}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={styles.input}
          required={required}
        />
      ) : (
        <input
          id={id}
          name={name}
          placeholder={placeholder}
          className={styles.input}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          pattern={pattern}
        />
      )}
    </div>
  );
};
