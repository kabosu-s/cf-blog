import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'outline';
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ href, variant = 'primary', className = '', children }: ButtonProps) => {
  const baseClass = 'button';
  const variantClass = variant === 'primary' ? 'button--primary' : 'button--outline';
  const combinedClassName = `${baseClass} ${variantClass} ${className}`.trim();

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  );
};
