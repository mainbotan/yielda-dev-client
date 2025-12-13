'use client';

import clsx from 'clsx';
import styles from './textarea.module.scss';
import { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: 'sm' | 'md' | 'bg';
  variant?: 'default' | 'contrast' | 'empty';
  border?: 'default' | 'rounded';
  error?: boolean;
  fullWidth?: boolean;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      size = 'md',
      variant = 'default',
      border = 'default',
      error = false,
      fullWidth = false,
      resize = 'both',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <textarea
        ref={ref}
        className={clsx(
          styles.textarea,
          {
            [styles.sm]: size === 'sm',
            [styles.bg]: size === 'bg',
            [styles.contrast]: variant === 'contrast',
            [styles.empty]: variant === 'empty',
            [styles.rounded]: border === 'rounded',
            [styles.error]: error,
            [styles.fullWidth]: fullWidth,
            [styles.resizeNone]: resize === 'none',
            [styles.resizeHorizontal]: resize === 'horizontal',
            [styles.resizeVertical]: resize === 'vertical',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;