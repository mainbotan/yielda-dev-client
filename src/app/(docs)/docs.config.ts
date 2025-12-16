export const docsConfig = [
    {
        name: 'Введение',
        href: '/',
        childrens: [
            {
                name: 'Что такое Yieldaa?',
                href: '/what-is-yieldaa'
            },
            {
                name: 'Не 1с, а Discord',
                href: '/not-1c',
                tags: [ 'Geek' ]
            }
        ]
    },
    {
        name: 'Стек и технологии',
        href: '/stack',
        childrens: [
            {
                name: 'Серверные языки',
                href: '/stack/server-side',
                // tags: [ 'Go' ]
            },
            // {
            //     name: 'Клиент',
            //     href: '/stack/client-side'
            // },
            // {
            //     name: 'Инфраструктура',
            //     href: '/stack/infrastructure'
            // }
        ]
    }
];