import mu from '@/assets/styles/chunks/markup.module.scss';
import styles from './../../page.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { toolsConfig } from './tools.config';
import { getStatusClass, getStatusText } from '../../page';

export default function Page() {
    return (
        <>
            <h1 className={mu.h1}>Next.js и инструменты</h1>
            <div className={mu.p}>
                Next.js - каркас для построения сложных интерфейсов. А любой каркас обязан использовать качественные инструменты
                для отделки. Мы рекомендуем к использованию следующие зависимости.
                <br /><br />
                <div className={styles.wrap}>
                    <table className={styles.table}>
                        <thead className={styles.thead}>
                            <tr>
                                <td>Инструмент</td>
                                <td>Версия</td>
                                <td>Область применения</td>
                                <td>Статус</td>
                            </tr>
                        </thead>
                        <tbody>
                            {toolsConfig.map((tech, index) => (
                                <tr key={index}>
                                    <td className={styles.name}>
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
            </div>
        </>
    )
}