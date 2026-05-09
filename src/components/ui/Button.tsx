import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'outline';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ href, type = 'button', variant = 'primary', className = '', children, onClick }: ButtonProps) => {
  const baseClass = 'button';
  const variantClass = variant === 'primary' ? 'button--primary' : 'button--outline';
  const combinedClassName = `${baseClass} ${variantClass} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};
