"use client";

import React from "react";
import styles from "./index.module.scss";
import { Container } from "@/components/shared/Container";

export const TermsData = [
  {
    title: "Сумма до",
    text: "30 000",
  },
  {
    title: "Срок",
    text: "7-31 дней",
  },
  {
    title: "Возраст",
    text: "20-65 лет",
  },
  {
    title: "Гражданство",
    text: "Российская Федерация",
  },
  {
    title: "Полная стоимость кредита (ПСК)",
    text: "от 0% до 360% в год",
  },
];

export const TermsBlock: React.FC = () => {
  return (
    <Container className={styles.container}>
      <h3 className={styles.section_header}>Условия выдачи займов онлайн:</h3>
      <div className={styles.terms_container}>
        {TermsData.map((item, index) => (
          <div key={index} className={styles.term_container}>
            <div className={styles.term_title}>{item.title}</div>
            <div className={styles.term_text}>{item.text}</div>
          </div>
        ))}
      </div>
      <p className={styles.text}>
        Пример условий носит информационный характер и не является публичной
        офертой. Точные условия клиент получает только в момент получения займа.
        Пример условий носит информационный характер и не является публичной
        офертой. Точные условия клиент получает только в момент получения займа.
      </p>
    </Container>
  );
};
