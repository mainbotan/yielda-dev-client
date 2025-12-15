import type { Metadata, Viewport } from "next";
import '@/assets/styles/main.scss';
import styles from './layout.module.scss';
import Providers from "./providers";
import ScrollToTop from "./ScrollToTop";
import { NavBar } from "./components/nav-bar/nav-bar";

export const metadata: Metadata = {
  title: "Matrix One - Разработчикам.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-theme="light" className={styles.layout}>
      <head>
        <link rel="icon" href="/images/logo/base.png" />
        <meta name="theme-color" content="#101010" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-navbutton-color" content="#101010" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
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