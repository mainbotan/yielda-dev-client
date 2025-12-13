'use client';

import styles from './layout.module.scss';
import Link from 'next/link';
import Container from './(sections)/components/container/container';
import clsx from 'clsx';
import Button from '@/assets/ui-kit/button/button';

export default function NotFound() {
  return (
    <Container className={clsx(styles.container, styles.notFound)}>
      <div className={styles.grid}>
        <div className={styles.frame}>
          <div className={styles.title}>
            Страница не найдена.
          </div>
          <div className={styles.description}>
            Запрашиваемая страница не найдена. Возможно её никогда не существовало, либо мы переместили её на другой адрес.
          </div>
          <div className={styles.actions}>
            <Link href='/' className={styles.link}><Button className={styles.action} variant='default'>На главную</Button></Link>
          </div>
        </div>
      </div>
    </Container>
  );
}