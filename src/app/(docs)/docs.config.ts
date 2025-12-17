export const docsConfig = [
    {
        name: 'Введение',
        href: '/',
        childrens: [
            {
                name: 'Say my name',
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
                childrens: [
                    {
                        name: 'Go и инструменты',
                        href: '/stack/server-side/go-n-tools',
                        tags: [ 'Geek' ]
                    }
                ]
            },
            {
                name: 'Клиент',
                href: '/stack/client-side',
                childrens: [
                    {
                        name: 'Next.js и инструменты',
                        href: '/stack/client-side/next-n-tools',
                        tags: [ 'Geek' ]
                    }
                ]
            },
            {
                name: 'Инфраструктура',
                href: '/stack/infrastructure',
                tags: [ 'Geek' ]
            }
        ]
    },
    {
        name: 'Архитектура Yieldaa!',
        href: '/architecture',
        childrens: [
            // {
            //     name: 'Слои экосистемы',
            //     href: '/architecture/ecosystem',
            // },
            // {
            //     name: 'Пользовательская платформа',
            //     href: '/architecture/platform',
            // }
        ]
    }
];