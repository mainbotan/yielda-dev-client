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
               
            </div>
            <CodeBlock lang='go' code={``} />
            <MermaidBlock definition={`sequenceDiagram
                participant U as Пользователь
                participant F as Frontend
                participant A as API Gateway
                participant S as Сервис заказов
                participant D as База данных
                
                U->>F: Добавить товар в корзину
                activate F
                F->>A: POST /api/cart/add
                activate A
                A->>S: Добавить товар
                activate S
                S->>D: INSERT INTO cart_items
                activate D
                D-->>S: Успешно
                deactivate D
                S-->>A: 200 OK
                deactivate S
                A-->>F: 200 OK
                deactivate A
                F-->>U: Товар добавлен
                deactivate F`}
                    />
        </>
    )
}