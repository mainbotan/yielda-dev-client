'use client';

import clsx from 'clsx';
import styles from './button.module.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import Spinner from '../spinner/spinner'; // Импортируем спиннер

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'leader' | 'contrast' | 'elevated' | 'empty' | 'glass' | 'brand' | 'accent';
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export default function Button({
  children,
  variant = 'default',
  size = 'md',
  fullWidth = false,
  loading = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <>
      <button
        className={clsx(
          styles.button,
          {
            [styles.default]: variant === 'default',
            [styles.leader]: variant === 'leader',
            [styles.contrast]: variant === 'contrast',
            [styles.elevated]: variant === 'elevated',
            [styles.empty]: variant === 'empty',
            [styles.glass]: variant === 'glass',
            [styles.brand]: variant === 'brand',
            [styles.accent]: variant === 'accent',
            [styles.fullWidth]: fullWidth,
            [styles.sm]: size === 'sm',
            [styles.bg]: size === 'lg',
            [styles.loading]: loading,
          },
          className
        )}
        disabled={isDisabled}
        {...props}
      >
        {loading ? (
          <div className={styles.loadingContent}>
            <Spinner size="sm" />
            <span>{children}</span>
          </div>
        ) : (
          children
        )}
      </button>
    </>
  );
}