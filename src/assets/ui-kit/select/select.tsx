'use client';

import clsx from 'clsx';
import styles from './select.module.scss';
import { SelectHTMLAttributes, forwardRef } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  size?: 'sm' | 'md' | 'bg';
  variant?: 'default' | 'contrast' | 'empty';
  border?: 'default' | 'rounded';
  error?: boolean;
  fullWidth?: boolean;
  options?: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      size = 'md',
      variant = 'default',
      border = 'default',
      error = false,
      fullWidth = false,
      options = [],
      className,
      ...props
    },
    ref
  ) => {
    return (
      <select
        ref={ref}
        className={clsx(
          styles.select,
          {
            [styles.sm]: size === 'sm',
            [styles.bg]: size === 'bg',
            [styles.contrast]: variant === 'contrast',
            [styles.empty]: variant === 'empty',
            [styles.rounded]: border === 'rounded',
            [styles.error]: error,
            [styles.fullWidth]: fullWidth,
          },
          className
        )}
        {...props}
      >
        {props.placeholder && (
          <option value="" disabled hidden>
            {props.placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = 'Select';

export default Select;