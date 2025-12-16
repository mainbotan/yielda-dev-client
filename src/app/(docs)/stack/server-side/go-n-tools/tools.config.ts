type TechStatus = 'using' | 'planned' | 'deprecated' | 'testing';

interface TechItem {
    name: string;
    version: string;
    area: string;
    status: TechStatus;
}

export const toolsConfig: TechItem[] = [
    {
        name: 'chi',
        version: 'v5.2.3+',
        area: 'API роутер, маршрутизация',
        status: 'using'
    },
    {
        name: 'golang-migrate',
        version: 'v4.19.1+',
        area: 'Миграции, управление состояние базы данных',
        status: 'using'
    },
    {
        name: 'jackc/pgx',
        version: 'v5.7.6+',
        area: 'Взаимодействие с базой данных. Row SQL.',
        status: 'using'
    }
];