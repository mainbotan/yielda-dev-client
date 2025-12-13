'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Code from '@/assets/ui-kit/icons/code';
import { isSectionActive } from '@/assets/utils/sections';
import { docsConfig } from './docs.config';
import styles from './nav-bar.module.scss';
import clsx from 'clsx';

interface NavItemProps {
  item: typeof docsConfig[0];
  level?: number;
}

function NavItem({ item, level = 0 }: NavItemProps) {
  const pathname = usePathname();
  
  // Используем утилиту isSectionActive для проверки активности
  const active = isSectionActive(pathname, { 
    href: item.href, 
    exact: level === 0 // Для корневых элементов проверяем exact match
  });

  return (
    <section className={clsx(styles.branch, { [styles.active]: active })}>
      <Link 
        href={item.href} 
        className={styles.base}
      >
        <span className={styles.marker}>
          <span className={styles.area}>
            <span className={styles.point} />
          </span>
        </span>
        <span className={styles.info}>
          <span className={styles.name}>{item.name}</span>
          {item.tags && item.tags.length > 0 && (
            <span className={styles.tags}>
              {item.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </span>
          )}
        </span>
      </Link>
      
      {/* Дочерние элементы */}
      {item.childrens && item.childrens.length > 0 && (
        <div className={styles.childrens}>
          {item.childrens.map((child, index) => (
            <NavItem 
              key={index} 
              item={{ ...child }} 
              level={level + 1}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.icon}>
          <span className={styles.square}>
            <Code className={styles.svg} />
          </span>
        </div>
        <div className={styles.logo}>
          Matrix One <span className={styles.secondary}>Разработчикам</span>
        </div>
      </div>
      
      <div className={styles.branches}>
        {docsConfig.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}