"use client";

import React from "react";
import styles from "./index.module.scss";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { RatingBlock } from "@/components/shared/RatingBlock";
import { ReviewBlock } from "@/components/shared/ReviewBlock";
import cn from "classnames";

const RecommendationData = [
  {
    text: "Крупные официальные компании из реестра ЦБ",
    routeSrc: "/assets/icons/ui/bank_white.svg",
    alt: "bank",
  },
  {
    text: "Высокий рейтинг на сайтах otzovik.ru и banki.ru",
    routeSrc: "/assets/icons/ui/stars_white.svg",
    alt: "stars",
  },
  {
    text: "Отлаженные процессы и быстрое время одобрения",
    routeSrc: "/assets/icons/ui/clock_white.svg",
    alt: "timer",
  },
  {
    text: "Высокий процент одобрения",
    routeSrc: "/assets/icons/ui/thumb_white.svg",
    alt: "thumbs up",
  },
];

const TermsData = [
  {
    title: "Сумма",
    text: "до 30 000 Р",
  },
  {
    title: "Срок",
    text: "до 30 дней",
  },
];

export const RecommendationBlock: React.FC = () => {
  return (
    <Container className={styles.container}>
      <h3 className={styles.section_header}>
        Займы онлайн нашим клиентам выдают
      </h3>
      <div className={styles.recommendations_container}>
        {RecommendationData.map((item, index) => (
          <div className={styles.recommendation_container} key={index}>
            <div className={styles.recommendation_icon}>
              <Image
                src={item.routeSrc}
                alt={item.alt}
                width={60}
                height={60}
              />
            </div>
            <div>
              <div className={styles.recommendation_text}>{item.text}</div>
            </div>
          </div>
        ))}
      </div>
      <ReviewBlock />
    </Container>
  );
};
