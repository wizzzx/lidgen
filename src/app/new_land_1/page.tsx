"use client";

import React from "react";
import styles from "./page.module.scss";
import { TitleBlockNewVariant } from "@/components/shared/TitleBlockNewVariant";
import { LinkSlider } from "@/components/shared/LinkSlider";

export default function LandingOne() {
  return (
    <>
      <p className={styles.intro_text}>
        Заполните форму и вашу заявку{" "}
        <span className={styles.blue}>с вероятностью 99.9% одобрят</span>
      </p>
      <TitleBlockNewVariant />
      <LinkSlider />
    </>
  );
}
