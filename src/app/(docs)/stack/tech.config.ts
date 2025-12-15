type TechStatus = 'using' | 'planned' | 'deprecated' | 'testing';

interface TechItem {
    name: string;
    icon: string;
    version: string;
    area: string;
    status: TechStatus;
}

export const techConfig: TechItem[] = [
    {
        name: 'Go',
        icon: '/images/tech/go-logo-blue.svg',
        version: '1.25.5+',
        area: 'Сервер, ядро',
        status: 'using'
    },
    {
        name: 'Postgres',
        icon: '/images/tech/postgres.png',
        version: '17.7+',
        area: 'Базы данных',
        status: 'using'
    },
    {
        name: 'Redis',
        icon: '/images/tech/redis.png',
        version: '8.4.0+',
        area: 'Базы данных, кэширование',
        status: 'planned'
    },
    {
        name: 'Clickhouse',
        icon: '/images/tech/clickhouse.png',
        version: '23.8+',
        area: 'Базы данных, мониторинг',
        status: 'planned'
    },,
    {
        name: 'Yandex Cloud',
        icon: '/images/tech/yandex-cloud.jpg',
        version: '-',
        area: 'Инфраструктура, хостинг',
        status: 'using'
    },
    {
        name: 'TypeScript',
        icon: '/images/tech/ts.png',
        version: '5.0+',
        area: 'Фронтенд, инструменты',
        status: 'using'
    },
    {
        name: 'Next.js',
        icon: '/images/tech/next-js.jpg',
        version: '15.4.6+',
        area: 'Фронтенд, инструменты',
        status: 'using'
    },
    {
        name: 'Sass/Scss',
        icon: '/images/tech/sass.png',
        version: '1.90.0+',
        area: 'Фронтенд, инструменты',
        status: 'using'
    }
];