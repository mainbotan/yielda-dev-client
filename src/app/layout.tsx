import type { Metadata, Viewport } from "next";
import '@/assets/styles/main.scss';
import styles from './layout.module.scss';
import Providers from "./providers";
import ScrollToTop from "./ScrollToTop";
import { NavBar } from "./components/nav-bar/nav-bar";

export const metadata: Metadata = {
  title: "Yieldaa! Разработчикам.",
  description: "",
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
};

export const viewport: Viewport = {
  themeColor: '#101010',
  width: 'device-width',
  initialScale: 1,
};

// Инлайн скрипт для предотвращения мерцания
const themeScript = `
  (function() {
    try {
      // Устанавливаем тему ДО рендеринга страницы
      var savedTheme = localStorage.getItem('theme');
      var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      var theme = savedTheme || systemTheme;
      
      // Применяем сразу, чтобы не было мерцания
      document.documentElement.setAttribute('data-theme', theme);
      document.body.setAttribute('data-theme', theme);
      
      // Обновляем meta theme-color
      var metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#101010' : '#ffffff');
      }
    } catch (e) {
      // При ошибке ставим темную тему по умолчанию
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.setAttribute('data-theme', 'dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={styles.layout}>
      <head>
        <link rel="icon" href="/images/logo/base.png" />
        <meta name="theme-color" content="#101010" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-navbutton-color" content="#101010" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        
        {/* Критически важный скрипт - устанавливает тему ДО рендеринга */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Providers>
            <main className={styles.container}>
              <div className={styles.focus}>
                  <div className={styles.panel}>
                    <div className={styles.inner}>
                      <NavBar />
                    </div>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.center}>
                      {children}
                    </div>
                  </div>
              </div>
            </main>
        </Providers>
      </body>
    </html>
  );
}