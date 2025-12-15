'use client';

import clsx from 'clsx';
import styles from './Yieldaa-full-logo.module.scss';

interface Props {
  className?: string,
  variant?: 'classic';
}

export default function YieldaaFullLogo({
  variant = 'classic',
  className
}: Props) {
  return (
    <>
        <div className={clsx(styles.frame, className)}>
            <span className={styles.m}>Yieldaa</span>
            <span className={styles.o}>One</span>
        </div>
    </>
  );
}