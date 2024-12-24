"use client";

import React from "react";
import styles from "./index.module.scss";
import { Container } from "@/components/shared/Container";
import cn from "classnames";
import Image from "next/image";

interface Props {
  className?: string;
}

export const InstructionsBlock: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn(styles.container, className)}>
      <h2 className={styles.header}>Как получить займ онлайн на карту?</h2>
      <div className={styles.cards_container}>
        <div className={cn(styles.card, styles.card_one)}>
          <Image
            src={"/assets/icons/ui/sheet.svg"}
            alt={"sheet"}
            width={32}
            height={32}
            className={styles.image}
          />
          <p className={styles.card_text}>Заполните короткую анкету</p>
        </div>
        <div className={cn(styles.card, styles.card_two)}>
          <Image
            src={"/assets/icons/ui/handshake.svg"}
            alt={"handshake"}
            width={44}
            height={27}
            className={styles.image}
          />
          <p className={styles.card_text}>Примите предложение кредитора</p>
        </div>
        <div className={cn(styles.card, styles.card_three)}>
          <Image
            src={"/assets/icons/ui/tape.svg"}
            alt={"tape"}
            width={49}
            height={30}
            className={styles.image}
          />
          <p className={styles.card_text}>Получите деньги</p>
        </div>
      </div>
    </Container>
  );
};
