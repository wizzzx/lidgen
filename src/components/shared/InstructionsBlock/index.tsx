"use client";

import React from "react";
import styles from "./index.module.scss";
import { BlockTitle } from "@/components/ui/BlockTitle";
import { Container } from "@/components/shared/Container";
import Image from "next/image";
import { StepList } from "@/components/ui/StepList";

export const InstructionsBlock: React.FC = () => {
  return (
    <Container className={styles.container}>
      <BlockTitle
        className={styles.title_text}
        title={"Как получить займ онлайн на карту?"}
      />
      <Container className={styles.sub_container}>
        <Image
          src="/assets/images/3034.svg"
          alt="loan calculator on mobile screen"
          width={338}
          height={686}
          className={styles.image}
          priority={true}
        />
        <StepList
          texts={[
            "Заполните короткую анкету",
            "Примите предложение кредитора",
            "Получите деньги",
          ]}
        />
      </Container>
    </Container>
  );
};
