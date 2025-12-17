import mu from '@/assets/styles/chunks/markup.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <h1 className={mu.h1}>Клиент</h1>
            <div className={mu.p}>
               Клиент - не менее значимая часть системы, требующая аккуратного выбора инструментов. 
               Мы делаем красивые вещи, от типографии до графиков, и для реализации всего этого нам нужен лучший стек.
               <br /><br />
               Итак, определим ряд ключевых аспектов для выбора инструментария клиентской части системы.

               <div className={mu.list}>
                    <div className={mu.row}>
                        <span className={mu.marker}><span className={mu.box}><span /></span></span>
                        <span className={mu.info}>
                            <h3 className={mu.h3}>Типизация.</h3>
                            <p className={clsx(mu.p, mu.secondary)}>
                                Мы имеем дело с системой, в которой данные между сервером и клиентом обязаны быть согласованы. Мы просто не можем
                                позволить себе пренебрежения типами. Когда речь идёт о системе из сотен сущностей разной сложности, поддержка строгой типизации является ключевым критерием выбора.
                            </p>
                        </span>
                    </div>
                    <div className={mu.row}>
                        <span className={mu.marker}><span className={mu.box}><span /></span></span>
                        <span className={mu.info}>
                            <h3 className={mu.h3}>Виртуальный DOM.</h3>
                            <p className={clsx(mu.p, mu.secondary)}>
                                Стандарт де-факто с появлением <span className={mu.tag}>React</span> и его мета-фреймворков. Если вы не знакомы с этим понятием и в целом 
                                компонентной разработкой - рекомендуем ознакомиться с <Link className={mu.accent} href='https://react.dev/'>React Dev.</Link>
                                <br /><br />
                                Мы знакомы с концепцией <span className={mu.tag}>Svelte</span>, полностью противоположной виртуальному DOM, однако этот фреймворк заметно 
                                отстаёт именно по численности сообщества на русских просторах, для нас этот факт является критически важным.
                            </p>
                        </span>
                    </div>
                    <div className={mu.row}>
                        <span className={mu.marker}><span className={mu.box}><span /></span></span>
                        <span className={mu.info}>
                            <h3 className={mu.h3}>Переиспользуемость стилей.</h3>
                            <p className={clsx(mu.p, mu.secondary)}>
                                Мы так же стараемся свести дублирование кодовой базы стилей к 0.
                                <br /><br />
                                Автор этого топика с сожалением наблюдает тенденцию использования <span className={mu.tag}>Tailwind</span>. 
                                Переиспользуемость при таком подходе по его скромному мнению сразу сводится на нет.
                            </p>
                        </span>
                    </div>
                </div>
            </div>
            <h2 className={mu.h2}>TypeScript + Next.js + SCSS</h2>
            <div className={mu.p}>
                Исходя из главных критериев выбора клиентского стека, связка <span className={mu.tag}>TypeScript</span>, <span className={mu.tag}>Next.js</span> и <span className={mu.tag}>SCSS</span> для нас является главным фаворитом.
                <br /><br />
                Клиентская часть всей экосистемы Yieldaa! использует именно её, в том числе промо-слой, сама платформа, авторизионный шлюз и документации.
                Благодаря этому мы получаем несколько ключевых преимуществ.

                
               <div className={mu.list}>
                    <div className={mu.row}>
                        <span className={mu.marker}><span className={mu.box}><span /></span></span>
                        <span className={mu.info}>
                            <h2 className={mu.h2}>TypeScript</h2>
                            <p className={clsx(mu.p, mu.secondary)}>
                                Строгая типизация сущностей, сохранение структуры и чёткая валидация.
                            </p>
                        </span>
                    </div>
                    <div className={mu.row}>
                        <span className={mu.marker}><span className={mu.box}><span /></span></span>
                        <span className={mu.info}>
                            <h2 className={mu.h2}>Next.js</h2>
                            <p className={clsx(mu.p, mu.secondary)}>
                                Next.js - мета-фреймворк <span className={mu.tag}>React</span>, выбранный не случайно. 
                                Из коробки Next.js поставляет крайне удобную маршрутизацию по схеме <span className={mu.tag}>layout + pages</span>, благодаря
                                которой мы избавляемся от тонны гемороя, при наличии десятков страниц со схожей структурой. 
                                <br /><br />
                                Next.js отлично ладит с TS, что является так же огромным <span className={mu.description}>(обязательным)</span> плюсом. 
                                <br /><br />
                                Оптимизация изображений, Turbopack и самое главное - поскольку Next.js является производным от <span className={mu.tag}>React</span>, написанные единожды хуки, контексты и типы могут
                                быть переиспользованы в случае масштабирования Yieldaa! на мобильные устройства с помощью <span className={mu.tag}>React Native</span>.
                            </p>
                        </span>
                    </div>
                    <div className={mu.row}>
                        <span className={mu.marker}><span className={mu.box}><span /></span></span>
                        <span className={mu.info}>
                            <h2 className={mu.h2}>SCSS</h2>
                            <p className={clsx(mu.p, mu.secondary)}>
                                SCSS - разновидность синтаксиса SASS <span className={mu.secondary}>(Syntactically Awesome Style Sheets)</span> - препроцессор, который превращает
                                CSS в шедевр.
                                <br /><br />
                                SCSS позволяет использовать <span className={mu.tag}>@mixins</span> - способ свести дублирование стилей к 0, объединяя свойства в некое подобие функций. 
                                <br /><br />
                                Помимо этого переменные, вложенность, циклы - то, за что мы так полюбили именно SCSS.
                                <br /><br />
                                Мы так же используем модульные стили по всей кодовой базе, сводя риск конфликтов селекторов к минимуму.
                            </p>
                        </span>
                    </div>
                </div>

                Таким образом мы получаем три верных рабочих лошадки, которые прекрасно живут друг с другом. По мере прочтения глав этой документации, посвящённых пользовательским интерфейсам,
                мы неоднократно будем упоминать и раскрывать преимущества этой связки.
            </div>
        </>
    )
}