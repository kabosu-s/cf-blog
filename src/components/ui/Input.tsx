import React, { useId } from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, id, ...props }: InputProps) => {
  const generatedID = useId();
  const inputID = id || generatedID;


  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputID} className={styles.label}>
          {label}
        </label>
      )}
      <input id={inputID} className={styles.input} {...props} />
    </div>
  );
};
