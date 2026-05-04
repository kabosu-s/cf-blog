import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Card = ({ children, className = '', style }: CardProps) => {
  return (
    <article className={`card ${className}`} style={style}>
      {children}
    </article>
  );
};
