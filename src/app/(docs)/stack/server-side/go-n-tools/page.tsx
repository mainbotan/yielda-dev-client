import mu from '@/assets/styles/chunks/markup.module.scss';
import styles from './../../page.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { getStatusClass, getStatusText } from '../../page';
import { toolsConfig } from './tools.config';

export default function Page() {
    return (
        <>
            <h1 className={mu.h1}>Go и инструменты</h1>
            <div className={mu.p}>
                На Go можно с нуля реализовать многие инструменты, но главный вопрос для нас - время. По этой причине 
                мы рекомендуем использовать одни и те же готовые библиотеки для реализации схожего функционала вне зависимости от 
                модуля платформы. Принцип One Stack дошёл и досюда. 
                <br /><br />
                Этот топик постоянно обновляется, в любом случае мы хотим дать несколько рекомендаций для выбора библиотек.
                <br /><br />
            </div>
            <br />
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
        </>
    )
}