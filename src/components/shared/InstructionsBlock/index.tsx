'use client'

import React from "react";
import styles from './index.module.scss'
import {BlockTitle} from "@/components/ui/BlockTitle";
import {Container} from "@/components/shared/Container";
import Image from "next/image";

export const InstructionsBlock: React.FC = () => {
    return (
        <Container className={styles.container}>
            <BlockTitle className={styles.title_text} title={"Как получить займ онлайн на карту?"} />
            <Container>
                <Image src='/assets/images/3035.svg' alt='loan calculator on mobile screen' width={337.98} height={685.91} />

            </Container>
        </Container>
    )
}

