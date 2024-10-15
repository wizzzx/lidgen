'use client'

import React from "react";
import styles from './index.module.scss'

interface Props {
    className?: string
    label: string
    icon?: React.ReactNode
}

export const Button: React.FC<Props> = ({className, label, icon}) => {
    return (
        <button className={className}>
            <span>{label}</span>
            {icon && <span className={styles.icon}>{icon}</span>}
        </button>
    )
}

