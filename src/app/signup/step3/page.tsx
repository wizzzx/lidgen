"use client";

import React from "react";
import styles from "./page.module.scss";
import { Container } from "@/components/shared/Container";
import Image from "next/image";
import { RegStep3 } from "@/components/shared/RegStep3";
import cn from "classnames";

export default function SignupStep3() {
  return (
    <main>
      <Container className={styles.container}>
        <Image
          src={"/assets/images/telephone_pic.webp"}
          alt={"telephone_pic"}
          width={655}
          height={655}
          loading={"eager"}
          className={cn(styles.image, "hidden-mobile")}
        />
        <RegStep3 />
      </Container>
    </main>
  );
}
