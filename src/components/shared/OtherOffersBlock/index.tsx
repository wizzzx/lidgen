'use client'

import React from 'react'
import styles from './index.module.scss'
import cn from 'classnames'
import {Container} from "@/components/shared/Container";
import Link from "next/link";

interface Props {
    className?: string
}

const OffersData = [
    {
        title: 'Без залога',
        route: '/bez_zaloga'
    },
    {
        title: 'С плохой кредитной историей',
        route: '/bad_credit'
    },
    {
        title: 'Без посещения офиса',
        route: '/no_office_visit'
    },
    {
        title: 'На большую сумму',
        route: '/large_sum'
    },
    {
        title: 'Деньги под залог ПТС',
        route: '/pod_pts'
    },
    {
        title: 'Долгосрочные займы',
        route: '/long_term'
    },
    {
        title: 'Быстрый займ на карту Сбербанка',
        route: '/quick_sber'
    },
    {
        title: 'Без прописки',
        route: '/no_registration'
    },
    {
        title: 'Без справок',
        route: '/no_papers'
    }
]

export const OtherOffersBlock: React.FC<Props> = ({className}) => {
    return (
        <Container className={styles.container}>
            <h3 className={styles.section_header}>Другие предложения</h3>
            <ul className={styles.offers_container}>
                {OffersData.map((item, index) => (
                    <li key={index} className={cn(styles.item, {
                        [styles.item_alternative_color]: index % 2 === 1
                    })}>
                        <Link href={item.route}>{item.title}</Link>
                    </li>
                ))}

            </ul>
        </Container>
    )
}