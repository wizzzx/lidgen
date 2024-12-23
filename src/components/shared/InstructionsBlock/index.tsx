"use client";

import React from "react";
import styles from "./index.module.scss";
import { Container } from "@/components/shared/Container";
import cn from "classnames";

interface Props {
  className?: string;
}

export const InstructionsBlock: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn(styles.container, className)}>
      <h2>Как получить займ онлайн на карту?</h2>
      <div className={styles.cards_container}>
        <div className={styles.card}></div>
      </div>
    </Container>
  );
};
