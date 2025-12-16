type TechStatus = 'using' | 'planned' | 'deprecated' | 'testing';

interface TechItem {
    name: string;
    version: string;
    area: string;
    status: TechStatus;
}

export const toolsConfig: TechItem[] = [
    {
        name: '@tanstack/react-query',
        version: '5.90.2+',
        area: 'Кэширование',
        status: 'using'
    },
    {
        name: '@tanstack/react-query-devtools',
        version: '5.90.2+',
        area: 'Отладка кэширования',
        status: 'using'
    },
    {
        name: 'clsx',
        version: '2.1.1+',
        area: 'Множественность классов для элементов',
        status: 'using'
    },
    {
        name: 'recharts',
        version: '3.2.0+',
        area: 'Графики',
        status: 'using'
    }
];