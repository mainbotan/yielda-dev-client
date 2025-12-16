'use client';

import { useEffect, useState } from 'react';
import Moon from '@/assets/ui-kit/icons/moon';
import styles from './theme-switcher.module.scss';
import Sun from '@/assets/ui-kit/icons/sun';
import clsx from 'clsx';

export function ThemeSwitcher() {
    const [theme, setTheme] = useState<'dark' | 'light'>('light');

    // Инициализация темы при монтировании
    useEffect(() => {
        // Проверяем сохраненную тему в localStorage
        const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
        
        // Проверяем системные предпочтения
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Определяем начальную тему
        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
        
        setTheme(initialTheme);
        applyTheme(initialTheme);
    }, []);

    // Функция применения темы
    const applyTheme = (theme: 'dark' | 'light') => {
        // Устанавливаем data-theme атрибут для html элемента
        document.documentElement.setAttribute('data-theme', theme);
        
        // Сохраняем в localStorage
        localStorage.setItem('theme', theme);
    };

    // Функция переключения темы
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        applyTheme(newTheme);
    };

    return (
        <button 
            className={styles.container}
            onClick={toggleTheme}
            aria-label={`Переключить на ${theme === 'dark' ? 'светлую' : 'темную'} тему`}
        >
            <section className={clsx(styles.section, theme === 'dark' && styles.active)}>
                <Moon className={styles.svg} />
            </section>
            <section className={clsx(styles.section, theme === 'light' && styles.active)}>
                <Sun className={styles.svg} />
            </section>
        </button>
    );
}