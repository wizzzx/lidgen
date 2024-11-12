"use client";

import React from "react";
import styles from "./index.module.scss";
import { Container } from "@/components/shared/Container";
import Image from "next/image";
import { StepList } from "@/components/ui/StepList";
import cn from "classnames";

export const InstructionsBlock: React.FC = () => {
  return (
    <Container className={styles.container}>
      <div className={cn(styles.title_text, "visible-desktop")}>
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
        <div>
          <div className={cn(styles.title_text, "hidden-desktop")}>
            Как получить займ онлайн на карту?
          </div>
          <StepList
            texts={[
              "Заполните короткую анкету",
              "Примите предложение кредитора",
              "Получите деньги",
            ]}
          />
        </div>
      </div>
    </Container>
  );
};
