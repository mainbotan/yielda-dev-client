import CodeBlock from '@/app/components/code-block/code-block';
import { MermaidBlock } from '@/app/components/merma-block/merma-block';
import mu from '@/assets/styles/chunks/markup.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <h1 className={mu.h1}>Инфраструктура</h1>
            <div className={mu.p}>
                Этот топик тесно связан с главой <Link className={mu.accent} href='/architecture'>архитектура Yieldaa!</Link> Для понимания общей концепции, и требований системы рекомендуем ознакомиться с ней до прочтения этого топика.
                <br /><br />
                Сервисы <Link className={mu.accent} href='https://yandex.cloud'>Yandex Cloud</Link> являются основой всей инфраструктуры Yieldaa. На российском рынке существует
                много достойных облачных провайдеров, чего стоит один <Link className={mu.accent} href='https://selectel.ru'>Selectel</Link>, однако 
                Yandex Cloud объединяет готовый набор нужных нам сервисов в рамках одного облака, что является важным фактором.
                <br /><br />
                Google Cloud, AWS и прочие невероятно хороши...., если бы не <span className={mu.accent}>152-ФЗ</span>, ставящий их использование под большие сомнения.
                <br /><br />
                Итак, здесь мы не будем подробно объяснять архитектуру Yieldaa!, но затронем основные инструменты, используемые для реализации гибкой инфраструктуры. 
                Сформируем список основных компонентов системы.
                <div className={mu.list}>
                    <div className={mu.row}>
                        <span className={mu.marker}><span className={mu.box}><span /></span></span>
                        <span className={mu.info}>
                            <h2 className={mu.h2}>Разработка & Деплой</h2>
                            <p className={clsx(mu.p, mu.secondary)}>
                                Этот слой отвечает за организацию командной разработки и запуск пайплайнов развёртывания. Нас интересуют инструменты на базе <span className={mu.tag}>Git</span>, позволяющие одновременно работать над несколькими отдельными репозиториями,
                                настраивать права доступа разработчиков и конечно же прописывать манифесты пайплайнов.<br /><br />
                                Основные платформы, признанные по всему миру и реализующие эти задачи - <span className={mu.tag}>Github CI/CD + Github Actions</span>, <span className={mu.tag}>GitLab</span> и <span className={mu.tag}>Bitbucket</span>.
                                <br /><br />
                                Все они имеют свои особенности и преимущества, но наш выбор - <span className={mu.tag}>GitLab</span>. По субъективному мнению авторов он лучше позволяет объединять разрозненные репозитории под флагом одного проекта, представляя таким образом
                                что-то вроде единого командного центра разработки.
                                <br /><br />
                                Помимо этого, в рамках одного и того же облачного провайдера Yandex Cloud вполне логично использовать его же сервис <span className={mu.tag}>Managed Service for GitLab</span>. 
                                Здесь развёрнут отдельный инстанс GitLab для всей команды.
                            </p>
                        </span>
                    </div>
                    <div className={mu.row}>
                        <span className={mu.marker}><span className={mu.box}><span /></span></span>
                        <span className={mu.info}>
                            <h2 className={mu.h2}>Сборка Docker-образов, регистрация контейнеров</h2>
                            <p className={clsx(mu.p, mu.secondary)}>
                                Если вы не знакомы с основами концепции контейнерных приложений, рекомендуем ознакомиться с <Link className={mu.accent} href='https://yandex.cloud/ru/blog/docker-guide'>Yandex Cloud Docker Guide.</Link> В общих красках - это инструмент, позволяющий одним-двумя
                                файлами манифестов объяснить железу как следует запустить наш сервис, и что нужно для этого установить (библиотеки, расширения и т.д.). После сборки такого сервиса из манифеста мы получаем изолированный контейнер с рабочей средой выполнения, что заметно
                                увеличивает эффективность разработки параллельно нескольких сервисов. <br /><br />
                                Каждый сервис, независимо от его задач (Next.js часть промо-сайта, api на Go авторизационного сервера), должен иметь в репозитории актуальный <span className={mu.span}>Dockerfile</span> для сборки сервиса, который после прохождения конвейера Gitlab будет развёртываться в среде выполнения.
                                <br /><br />
                                Однако сам GitLab не отвечает за регистрацию образов всех наших сервисов, он просто запускает нужные команды для прохождения конвейера и передаёт манифест сервиса звену регистрации контейнеров.
                                В нашей системе таким звеном является сервис Yandex Cloud - <span className={mu.tag}>Container Registry</span>. Сюда попадают образы всех наших сервисов, в том числе клиентских приложений, бэкендов и обслуживающих сервисов.
                                Здесь же происходит сканирование манифестов на наличие уязвимостей и сборка контейнеров.
                            </p>
                        </span>
                    </div>
                    <div className={mu.row}>
                        <span className={mu.marker}><span className={mu.box}><span /></span></span>
                        <span className={mu.info}>
                            <h2 className={mu.h2}>Управление контейнерами</h2>
                            <p className={clsx(mu.p, mu.secondary)}>
                                После того как контейнеры всех сервисов собраны, их необходимо развернуть на рабочих машинках, настроить механизмы репликации и организовать единую точку входа. <br /><br />
                                Лидером в оркестрации контейнерными приложениями является <span className={mu.tag}>Kubernetes</span>, он же <span className={mu.tag}>K8s</span>. Именно
                                здесь происходит настройка необходимых ресурсов для обеспечения корректной работы всех сервисов. Сюда и попадают собранные образы из <span className={mu.tag}>Yandex Container Registry</span>.
                                <br /><br />
                                Очевидно, в рамках всё того же облачного провайдера Yandex Cloud, мы выбираем его отдельный сервис <span className={mu.tag}>Managed Service for Kubernetes</span>. 
                                Он отлично интегрируется с <span className={mu.tag}>Yandex Container Registry</span> <span className={mu.description}>очевидно</span>, и берёт на себя управление мастер-нодой нашей системы, что
                                так же снижает наши затраты на время настройки.
                            </p>
                        </span>
                    </div>
                    <div className={mu.row}>
                        <span className={mu.marker}><span className={mu.box}><span /></span></span>
                        <span className={mu.info}>
                            <h2 className={mu.h2}>Базы данных</h2>
                            <p className={clsx(mu.p, mu.secondary)}>
                                Базы данных являются <span className={mu.tag}>Stateful</span> сервисами нашей системы, то есть должны помнить своё предыдущее состояние. <br />
                                <br />
                                Мы не используем связку <span className={mu.accent}>Yandex Container Registry</span> + <span className={mu.accent}>Managed Service for Kubernetes</span> для баз данных. Такой подход касается в основном только наших Next.js приложений и API-бэкендов.
                                <br /><br />
                                Вместо этого для баз данных мы выбираем отдельный сервис <span className={mu.tag}>Yandex Managed Service for PostgreSQL</span>, берущий на себя геморрой по развёртыванию и поддержке версий Postgres. Благодаря Managed Service 
                                мы получаем быстрое создание инстансов наших баз и самое главное, благодаря их <span className={mu.tag}>API</span> имеем возможность 
                                запускать развёртывание отдельных инстансов для организаций клиентов, прямо с наших серверов на <span className={mu.tag}>Go</span>. Помимо этого
                                под Go существует <span className={mu.tag}>SDK</span> для работы с <span className={mu.accent}>Yandex Managed Service for PostgreSQL</span>, что очевидно является важным плюсом.
                            </p>
                        </span>
                    </div>
                    <div className={mu.row}>
                        <span className={mu.marker}><span className={mu.box}><span /></span></span>
                        <span className={mu.info}>
                            <h2 className={mu.h2}>Управление подсетями</h2>
                            <p className={clsx(mu.p, mu.secondary)}>
                                Для корректного общения между <span className={mu.accent}>Managed Service for PostgreSQL</span> (нашим хранилищем данных) и <span className={mu.accent}>Managed Service for Kubernetes</span> нам требуется 
                                ещё один) дополнительный сервис <span className={mu.tag}>Virtual Private Cloud</span> так же от Yandex Cloud. Это звено значительно 
                                легче K8s, здесь мы настраиваем сети для общения между нашими сервисами и хранилищем данных. Здесь же работает файрвол.
                            </p>
                        </span>
                    </div>
                    <div className={mu.row}>
                        <span className={mu.marker}><span className={mu.box}><span /></span></span>
                        <span className={mu.info}>
                            <h2 className={mu.h2}>DNS</h2>
                            <p className={clsx(mu.p, mu.secondary)}>
                                Для связи поддоменов Yieldaa! с сервисами из нашего кластера в <span className={mu.accent}>Managed Service for Kubernetes</span>. Здесь <span className={mu.tag}>dev.yieldaa.com</span> привязывается к сервису Next.js приложения этой документации, 
                                <span className={mu.tag}>api.yieldaa.com</span> к api-сервису на Go и по аналогии все остальные публичные сервисы.
                            </p>
                        </span>
                    </div>
                    <div className={mu.row}>
                        <span className={mu.marker}><span className={mu.box}><span /></span></span>
                        <span className={mu.info}>
                            <h2 className={mu.h2}>Статика и CDN</h2>
                            <p className={clsx(mu.p, mu.secondary)}>
                                Для хранения статики, в том числе с разделением доступа для разных организаций <span className={mu.secondary}>(условно организация A отправляет документ на наш сервер, который после обработки попадает в выделенный
                                под эту организацию бакет в хранилище статики)</span>, мы используем <span className={mu.tag}>Yandex Object Storage</span>.
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}