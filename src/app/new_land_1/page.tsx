"use client";

import React from "react";
import styles from "./page.module.scss";
import { TitleBlockNewVariant } from "@/components/shared/TitleBlockNewVariant";
import { LinkSlider } from "@/components/shared/LinkSlider";
import Image from "next/image";

export default function LandingOne() {
  return (
    <>
      <p className={styles.intro_text}>
        Заполните форму и вашу заявку{" "}
        <span className={styles.blue}>с вероятностью 99.9% одобрят</span>
      </p>
      <TitleBlockNewVariant />
      <LinkSlider />
      <div className={styles.text_container}>
        <div className={styles.header_icons_container}>
          <h2 className={styles.header}>Займ онлайн - ваш осознанный выбор</h2>
          <div className={styles.icon_container}>
            <Image
              src={"/assets/icons/ui/bank_navy.svg"}
              alt={"bank"}
              width={38}
              height={38}
            />
            <Image
              src={"/assets/icons/ui/arrow_navy.svg"}
              alt={"arrow"}
              width={14}
              height={14}
            />
            <Image
              src={"/assets/icons/ui/clock_navy.svg"}
              alt={"clock"}
              width={38}
              height={38}
            />
            <Image
              src={"/assets/icons/ui/arrow_navy.svg"}
              alt={"arrow"}
              width={14}
              height={14}
            />
            <Image
              src={"/assets/icons/ui/thumbsup_navy.svg"}
              alt={"thumb"}
              width={38}
              height={38}
            />
          </div>
        </div>
        <div className={styles.content_container}>
          <h3 className={styles.section_subheader}>
            Получить займ на карту онлайн достаточно легко
          </h3>
          <p className={styles.section_paragraph}>
            Важен выбор финансового партнёра, который поможет получить деньги
            быстро, бережно обращается с вашими персональными данными, даёт вам
            только проверенный порядочные микрофинансовые компании, имеющие
            стандарт качества и хорошую репутацию.
          </p>
        </div>
      </div>
    </>
  );
}
