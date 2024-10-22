"use client";

import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { RatingBlock } from "@/components/shared/RatingBlock";
import { ReviewBlock } from "@/components/shared/ReviewBlock";

const RecommendationData = [
  {
    text: "Крупные официальные компании из реестра ЦБ",
    routeSrc: "/assets/icons/ui/bank.svg",
    alt: "bank",
  },
  {
    text: "Высокий рейтинг на сайтах otzovik.ru и banki.ru",
    routeSrc: "/assets/icons/ui/stars.svg",
    alt: "stars",
  },
  {
    text: "Отлаженные процессы и быстрое время одобрения",
    routeSrc: "/assets/icons/ui/timer.svg",
    alt: "timer",
  },
  {
    text: "Высокий процент одобрения",
    routeSrc: "/assets/icons/ui/thumbs.svg",
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
          <React.Fragment key={index}>
            <div className={styles.recommendation_container}>
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
          </React.Fragment>
        ))}
      </div>
      <div className={styles.terms_container}>
        {TermsData.map((item, index) => (
          <div key={index} className={styles.term_container}>
            <div className={styles.term_title}>{item.title}</div>
            <div className={styles.term_text}>{item.text}</div>
          </div>
        ))}
      </div>
      <RatingBlock />
      <Button
        label={"Получить займ за 5 минут"}
        className={styles.big_button}
      />
      <div className={styles.review_block_container}>
        <ReviewBlock />
      </div>
    </Container>
  );
};
