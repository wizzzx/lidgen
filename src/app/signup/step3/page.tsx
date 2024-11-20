"use client";

import React from "react";
import styles from "./page.module.scss";
import { Container } from "@/components/shared/Container";
import Image from "next/image";

export default function SignupStep3() {
  return (
    <main>
      <Container className={styles.container}>
        {/*<div className={styles.ellipse}></div>*/}
        <Image
          src={"/assets/images/telephone_pic.webp"}
          alt={"telephone_pic"}
          width={655}
          height={655}
          loading={"eager"}
        />
        {/*  blob*/}
      </Container>
    </main>
  );
}
