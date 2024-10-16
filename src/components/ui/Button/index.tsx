'use client'

import React from "react";
import styles from './index.module.scss'
import cn from "classnames";

interface Props {
    className?: string
    label: string
    children?: React.ReactNode
}

export const Button: React.FC<Props> = ({className, label, children}) => {
    return (
        <button className={cn(styles.button, className)}>
            {label}
            {children}
        </button>
    )
}

