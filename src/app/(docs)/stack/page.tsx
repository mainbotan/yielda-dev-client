import mu from '@/assets/styles/chunks/markup.module.scss';
import styles from './page.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { techConfig } from './tech.config'; // Импорт конфига

// Функция для получения класса статуса
export const getStatusClass = (status: string) => {
    switch(status) {
        case 'using': return clsx(styles.status, styles.using);
        case 'planned': return clsx(styles.status, styles.planned);
        case 'deprecated': return clsx(styles.status, styles.deprecated);
        default: return styles.status;
    }
};

// Функция для отображения текста статуса
export const getStatusText = (status: string) => {
    switch(status) {
        case 'using': return 'Используется';
        case 'planned': return 'Запланировано';
        case 'deprecated': return 'Избавляемся';
        default: return status;
    }
};

export default function Page() {
    return (
        <>
            <h1 className={mu.h1}>Стэк и технологии</h1>
            <p className={mu.p}>
               Важный принцип, который ложится в основу этой внутренней документации, и который мы и впредь будем соблюдать - выбор каждой технологии объясняется в сравнении с аналогами. Мы не пытаемся навязать какой-то конкретный язык просто потому что, мы всегда стараемся доказать почему именно он/она/оно. <span className={mu.description}>а не Rust)</span>
               <br /><br />
               Так же для понимания выбранного стека нужно знать архитектурный контекст Yieldaa, для этого рекомендуем ознакомиться с топиками <Link className={mu.accent} href='/arhitecture'>архитектура Yieldaa!</Link>.
               <br /><br />
               Так же помните, что эта документация хоть и акцентирует внимание на модулях самой платформы, но так же описывает все пакеты глобальной структуры Yieldaa, включая промо-слой, авторизационный шлюз, клиентскую документацию, и даже...этот сайт внутренней документации.
               <br /><br />
               Таким образом, мы стремимся прийти к единой языковой кодовой базе, к ситуации, когда весь код, вне зависимости от предметной области (условно промо-слой или модули самой платформы) написан
               на одних и тех же языках, использует одни и те же библиотеки и поддерживает одни и те же версии ПО.
            </p>
            <br />
            <h2 className={mu.h2}>Краткая сводка</h2>
            <p className={mu.p}>
               В топиках этой главы мы подробно объясняем основания выбора каждой технологии, но если вы совсем недавно пришли в команду и хотите оценить свои возможности, вот краткая сводка технологического стека.
            </p>
            <br />
            <div className={styles.wrap}>
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr>
                            <td>Язык / технология</td>
                            <td>Название</td>
                            <td>Версия</td>
                            <td>Область применения</td>
                            <td>Статус</td>
                        </tr>
                    </thead>
                    <tbody>
                        {techConfig.map((tech, index) => (
                            <tr key={index}>
                                <td>
                                    <span className={styles.icon}>
                                        <img 
                                            src={tech.icon}
                                        />
                                    </span>
                                    {/* {tech.name} */}
                                </td>
                                <td>
                                    {tech.name}
                                </td>
                                <td className={mu.accent}>
                                    {tech.version}
                                </td>
                                <td>
                                    {tech.area}
                                </td>
                                <td>
                                    <span className={getStatusClass(tech.status)}>
                                        {getStatusText(tech.status)}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}