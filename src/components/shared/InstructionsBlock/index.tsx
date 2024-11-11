"use client";

import React from "react";
import styles from "./index.module.scss";
import { Container } from "@/components/shared/Container";
import Image from "next/image";
import { StepList } from "@/components/ui/StepList";

export const InstructionsBlock: React.FC = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.title_text}>
        Как получить займ онлайн на карту?
      </div>
      <div className={styles.sub_container}>
        <Image
          src="/assets/images/3034.svg"
          alt="loan calculator on mobile screen"
          width={338}
          height={686}
          className={styles.image}
          loading={"lazy"}
        />
        <StepList
          texts={[
            "Заполните короткую анкету",
            "Примите предложение кредитора",
            "Получите деньги",
          ]}
        />
      </div>
    </Container>
  );
};
