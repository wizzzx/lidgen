"use client";

import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { AccordionBlock } from "@/components/ui/AccordionBlock";




export const GuaranteeBlock: React.FC = () => {
  return (
    <Container className={styles.container}>
      <h2 className={styles.section_header}>Займ на карту онлайн за 5 минут</h2>
      <div className={styles.section_container}>
        <Image
          src={"/assets/images/hands.svg"}
          alt={"Hands holding a phone picture"}
          width={864}
          height={911}
        />
        <AccordionBlock />
      </div>
    </Container>
  );
};
