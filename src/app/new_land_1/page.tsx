"use client";

import React from "react";
import styles from "./page.module.scss";
import { TitleBlockNewVariant } from "@/components/shared/TitleBlockNewVariant";
import { LinkSlider } from "@/components/shared/LinkSlider";
import Image from "next/image";
import { MfoCard } from "@/components/shared/MfoCard";
import { InstructionsBlock } from "@/components/shared/InstructionsBlock";
import { TermsBlock } from "@/components/shared/TermsBlock";
import { RecommendationBlock } from "@/components/shared/RecommendationBlock";
import { ArticlesBlock } from "@/components/shared/ArticlesBlock";
import { GuaranteeBlock } from "@/components/shared/GuaranteeBlock";

export default function LandingOne() {
  return (
    <>
      <div className={styles.grey_bg}>
        <p className={styles.intro_text}>
          Заполните форму и вашу заявку{" "}
          <span className={styles.blue}>с вероятностью 99.9% одобрят</span>
        </p>
        <TitleBlockNewVariant />
        <LinkSlider />

        <div className={styles.text_container}>
          <div className={styles.header_icons_container}>
            <h2 className={styles.header}>
              Займ онлайн - ваш осознанный выбор
            </h2>
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
              быстро, бережно обращается с вашими персональными данными, даёт
              вам только проверенный порядочные микрофинансовые компании,
              имеющие стандарт качества и хорошую репутацию.
            </p>
          </div>
        </div>

        <div className={styles.cards_container}>
          <div className={styles.cards_grid}>
            <MfoCard />
            <MfoCard />
            <MfoCard />
            <MfoCard />
            <MfoCard />
            <MfoCard />
            <MfoCard />
            <MfoCard />
          </div>

          <button className={styles.cards_button}>
            Получить займ за 5 минут
          </button>
        </div>
        <InstructionsBlock />
        <TermsBlock />
        <RecommendationBlock />
        <GuaranteeBlock />
        <ArticlesBlock />
      </div>
    </>
  );
}
