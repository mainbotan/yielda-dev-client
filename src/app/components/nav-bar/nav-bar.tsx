'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Code from '@/assets/ui-kit/icons/code';
import MenuIcon from '@/assets/ui-kit/icons/menu'; // Импортируем иконку меню
import CloseIcon from '@/assets/ui-kit/icons/close'; // Импортируем иконку закрытия
import { isSectionActive } from '@/assets/utils/sections';
import { docsConfig } from './docs.config';
import styles from './nav-bar.module.scss';
import clsx from 'clsx';

interface NavItemProps {
  item: typeof docsConfig[0];
  level?: number;
  onItemClick?: () => void; // Коллбэк для закрытия меню при клике на элемент
}

function NavItem({ item, level = 0, onItemClick }: NavItemProps) {
  const pathname = usePathname();
  
  const active = isSectionActive(pathname, { 
    href: item.href, 
    exact: level === 0
  });

  const handleClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <section className={clsx(styles.branch, { [styles.active]: active })}>
      <Link 
        href={item.href} 
        className={styles.base}
        onClick={handleClick}
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
      
      {item.childrens && item.childrens.length > 0 && (
        <div className={styles.childrens}>
          {item.childrens.map((child, index) => (
            <NavItem 
              key={index} 
              item={{ ...child }} 
              level={level + 1}
              onItemClick={onItemClick}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Определяем, мобильное ли устройство
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Закрываем меню при изменении размера окна на десктоп
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);
  
  // Блокируем скролл при открытом меню на мобилке
  useEffect(() => {
    if (isMobile && isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, isMenuOpen]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Кнопка меню для мобилок */}
      {isMobile && (
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMenuOpen ? (
            <CloseIcon className={styles.svg} />
          ) : (
            <MenuIcon className={styles.svg} />
          )}
        </button>
      )}
      
      {/* Оверлей для затемнения фона */}
      {isMobile && isMenuOpen && (
        <div 
          className={styles.mobileOverlay}
          onClick={closeMenu}
        />
      )}
      
      {/* Основное меню */}
      <div className={clsx(
        styles.container, 
        { 
          [styles.mobileOpen]: isMobile && isMenuOpen,
          [styles.mobileClosed]: isMobile && !isMenuOpen
        }
      )}>
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
            <NavItem 
              key={index} 
              item={item}
              onItemClick={closeMenu}
            />
          ))}
        </div>
      </div>
    </>
  );
}