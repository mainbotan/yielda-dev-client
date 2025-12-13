'use client';

import clsx from 'clsx';
import styles from './matrix-full-logo.module.scss';

interface Props {
  className?: string,
  variant?: 'classic';
}

export default function MatrixFullLogo({
  variant = 'classic',
  className
}: Props) {
  return (
    <>
        <div className={clsx(styles.frame, className)}>
            <span className={styles.m}>Matrix</span>
            <span className={styles.o}>One</span>
        </div>
    </>
  );
}