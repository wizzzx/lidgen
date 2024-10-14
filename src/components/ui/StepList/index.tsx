'use client'

import React from 'react'
import styles from './index.module.scss'
import cn from "classnames";
import Image from "next/image";
import {Container} from "@/components/shared/Container";


interface Props {
    className?: string,

}

const StepNumbers = [
    {

    }
]

export const StepList: React.FC<Props> = ({className, }) => {
    return (
        <Container className={styles.container}>

        </Container>
    )
}
