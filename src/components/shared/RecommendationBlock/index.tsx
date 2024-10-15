"use client";

import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { Container } from "@/components/shared/Container";
import {Button} from "@/components/ui/Button";

const RecommendationData = [
  {
    text: "Крупные официальные компании из реестра ЦБ",
    icon: "/assets/icons/ui/bank.svg",
  },
  {
    text: "Высокий рейтинг на сайтах otzovik.ru и banki.ru",
    icon: "/assets/icons/ui/stars.svg",
  },
  {
    text: "Отлаженные процессы и быстрое время одобрения",
    icon: "/assets/icons/ui/timer.svg",
  },
  {
    text: "Высокий процент одобрения",
    icon: "/assets/icons/ui/thumbs.svg",
  },
];

const TermsData = [
    {
        title: 'Сумма',
        text: 'до 30 000 &#x20BD'
    },
    {
        title: 'Срок',
        text: 'до 30 дней'
    }
]

const RatingData = [
    {
        title: 'Деньги сразу',
        subtitle: 'ООО МКК "Скороденьги"',
        platform: 'Banki.ru 5.0   Otzovik 5.0'
    },
    {
        title: 'Деньги сразу',
        subtitle: 'ООО МКК "Миг Финанс"',
        platform: 'Banki.ru 5.0   Otzovik 5.0'
    },
    {
        title: 'Деньги сразу',
        subtitle: 'ООО МКК "КешБек Налом"',
        platform: 'Banki.ru 5.0   Otzovik 5.0'
    },
    {
        title: 'Деньги сразу',
        subtitle: 'ООО МКК "Денюжки под ПТС"',
        platform: 'Banki.ru 5.0   Otzovik 5.0'
    },
    {
        title: 'Деньги сразу',
        subtitle: 'ООО МКК "Первая финансовая организация"',
        platform: 'Banki.ru 5.0   Otzovik 5.0'
    },
]

export const RecommendationBlock: React.FC = () => {
  return (
    <Container className={styles.container}>
      <h3 className={styles.section_header}>
        Займы онлайн нашим клиентам выдают
      </h3>
      <div>
        {RecommendationData.map((item, index) => (
          <div key={index} className={styles.recommendation_container}>
            <div className={styles.recommendation_icon}>{item.icon}</div>
            <div className={styles.recommendation_text}>{item.text}</div>
          </div>
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
      <div className={styles.rating_container}>
        {RatingData.map((item, index) => (
          <div key={index}>
            <div>
              <div>{item.title}</div>
              <div>{item.subtitle}</div>
            </div>
            <div>
              <div>{item.platform}</div>
              <Button label={"Получить за 5 минут"} icon={'./assets/icons/clock.svg'}/>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
