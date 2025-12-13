'use client';

import clsx from 'clsx';
import styles from './switch.module.scss';
import { InputHTMLAttributes, ReactNode } from 'react';

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode;
  variant?: 'classic' | 'contrast' | 'accent' | 'alternative' | 'brand';
  switchSize?: 'sm' | 'md' | 'bg';
  disabled?: boolean;
}

export default function Switch({
  label,
  variant = 'classic',
  switchSize = 'md',
  disabled = false,
  className,
  ...props
}: SwitchProps) {
  return (
    <label className={clsx(
      styles.switchWrapper,
      styles[switchSize],
      { [styles.disabled]: disabled },
      className
    )}>
      <input
        type="checkbox"
        className={clsx(styles.switch, styles[variant])}
        disabled={disabled}
        {...props}
      />
      <span className={styles.slider} />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}