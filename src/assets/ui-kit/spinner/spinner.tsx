'use client';

import clsx from 'clsx';
import styles from './spinner.module.scss';
import { HTMLAttributes } from 'react';

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'bg';
  variant?: 'classic' | 'contrast' | 'accent' | 'brand';
}

export default function Spinner({
  size = 'md',
  variant = 'classic',
  className,
  ...props
}: SpinnerProps) {
  return (
    <div
      className={clsx(
        styles.spinner,
        {
          [styles.sm]: size === 'sm',
          [styles.bg]: size === 'bg',
          [styles.contrast]: variant === 'contrast',
          [styles.accent]: variant === 'accent',
          [styles.brand]: variant === 'brand',
        },
        className
      )}
      {...props}
    />
  );
}