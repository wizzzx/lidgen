"use client";

import * as React from "react";
import styles from "./page.module.scss";
import { Container } from "@/components/shared/Container";
import Image from "next/image";
import { RegStep2 } from "@/components/shared/RegStep2";
import cn from "classnames";

export default function SignupStep2() {
  return (
    <main>
      <Container className={styles.container}>
        <ol className={cn(styles.list, "hidden-mobile")}>
          <li className={styles.list_item}>Заполните короткую анкету</li>
          <li className={styles.list_item}>Примите предложение кредитора</li>
          <li className={styles.list_item}>Получите деньги</li>
        </ol>
        <RegStep2 />
        <Image
          src={"/assets/images/girl-1-min.webp"}
          alt={"girl"}
          width={636}
          height={678}
          className={cn(styles.image, "hidden-mobile")}
          loading={"eager"}
          priority={true}
        />
      </Container>
    </main>
  );
}
