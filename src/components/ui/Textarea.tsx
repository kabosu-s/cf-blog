import React, { useId } from 'react';
import styles from './Textarea.module.css';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}



export const Textarea = ({ label, id, ...props }: TextareaProps) => {
  const generatedID = useId();
  const textareaID = id || generatedID;


  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={textareaID} className={styles.label}>
          {label}
        </label>
      )}
      <textarea id={textareaID} className={styles.textarea} {...props} />
    </div>
  );
};
