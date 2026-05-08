import React from 'react';
import styles from './Textarea.module.css';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = ({ label, id, ...props }: TextareaProps) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <textarea id={id} className={styles.textarea} {...props} />
    </div>
  );
};
