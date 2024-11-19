"use client";

import React from "react";
import { Container } from "@/components/shared/Container";
import styles from "./page.module.scss";
import Image from "next/image";
import { RegStep1 } from "@/components/shared/RegStep1";

export default function SignupStep1() {
  return (
    <main>
      <Container className={styles.container}>
        <ol className={styles.list}>
          <li className={styles.list_item}>Заполните короткую анкету</li>
          <li className={styles.list_item}>Примите предложение кредитора</li>
          <li className={styles.list_item}>Получите деньги</li>
        </ol>
        <RegStep1 />
        <Image
          src={"/assets/images/girl-1-min.webp"}
          alt={"girl"}
          width={636}
          height={678}
          className={styles.image}
          loading={"eager"}
          priority={true}
        />
      </Container>
    </main>
  );
}
