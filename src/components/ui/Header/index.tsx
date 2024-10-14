'use client'

import React from 'react'
import Link from "next/link";
import {Container} from "../../shared/Container";
import cn from 'classnames'
import styles from './index.module.scss'


interface Props {
    className?: string
}

const navigationButtons = [
    {
        title: 'Клиентам',
        route:'/clients'
    },
    {
        title: 'Партнерам',
        route: '/partners'
    },
    {
        title: 'Категория 1',
        route: '/cat1'
    },
    {
        title: 'Категория 2',
        route: '/cat2'
    },
    {
        title: 'Категория 3',
        route: '/cat3'
    },
    {
        title: 'Блог',
        route: '/blog'
    },
]

export const Header: React.FC<Props> = ({className}) => {
    return (
        <header className={cn(styles.header, className)}>
            <Container className={styles.container}>
                <nav className={cn(styles.nav_container, className)}>
                    <Link href='/' className={styles.logo_link}>
                        <span className={styles.highlight_logo}>MFO</span> PLATFORM
                    </Link>
                    <ul className={styles.nav_buttons}>
                        {navigationButtons.map((button, index) => (
                            <li key={index}>
                                <Link href={button.route}>
                                    {button.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>


        </header>
    )
}

