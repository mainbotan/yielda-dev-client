'use client';

import clsx from 'clsx';
import styles from './input.module.scss';
import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  size?: 'sm' | 'md' | 'bg';
  variant?: 'default' | 'contrast' | 'empty';
  border?: 'default' | 'rounded';
  error?: boolean;
  fullWidth?: boolean;
  label?: string | false;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      variant = 'default',
      border = 'default',
      error = false,
      fullWidth = false,
      label = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className={clsx(styles.wrapper, { [styles.fullWidth]: fullWidth })}>
        {label && <div className={styles.label}>{label}</div>}
        <input
          ref={ref}
          className={clsx(
            styles.input,
            {
              [styles.sm]: size === 'sm',
              [styles.bg]: size === 'bg',
              [styles.contrast]: variant === 'contrast',
              [styles.empty]: variant === 'empty',
              [styles.rounded]: border === 'rounded',
              [styles.error]: error,
            },
            { [styles.fullWidth]: fullWidth },
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;