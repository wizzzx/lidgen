"use client";

import React from "react";
import styles from "./index.module.scss";
import { Container } from "@/components/shared/Container";
import Image from "next/image";

const ReviewData = [
  {
    id: 1,
    title: "Константин Душный",
    text: "Очень довольна условиями предоставления займов и обслуживанием. Сотрудники вежливы и внимательны. Всегда есть различные бонусы и акции. Есть возможность совершать все операции через мобильное приложение...",
    date: "02.08.2023",
    stars: 4,
  },
  {
    id: 2,
    title: "Константин Душный",
    text: "Все быстро. Вежливо. Удобно.",
    date: "02.08.2023",
    stars: 4,
  },
  {
    id: 3,
    title: "Константин Душный",
    text: "Все быстро. Вежливо. Удобно.",
    date: "02.08.2023",
    stars: 4,
  },
  {
    id: 4,
    title: "Николай А.",
    text: "Все быстро. Вежливо. Удобно.",
    date: "02.08.2023",
    stars: 4,
  },
  {
    id: 5,
    title: "Ангелина",
    text: "Отличные специалисты, много акций! Быстрое оформление без кучи документов. Рекомендую",
    date: "02.08.2023",
    stars: 4,
  },
];

const StarRating = ({ stars }: { stars: number }) => {
  return (
    <div>
      {Array.from({ length: stars }, (_, index) => (
        <Image
          key={index}
          src={"/assets/icons/ui/star_rating.svg"}
          alt={"star"}
          width={14}
          height={14}
        />
      ))}
    </div>
  );
};

export const ReviewBlock: React.FC = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.review_container}>
        <h3>Отзывы наших клиентов</h3>
        <p>Поделитесь своим мнением о сервисе</p>
        <div className={styles.review_cards_container}>
          {ReviewData.map((item) => (
            <div key={item.id}>
              <h4 className={styles.name}>{item.title}</h4>
              <div className={styles.date_stars_container}>
                <time>{item.date}</time>
                <StarRating stars={item.stars} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.review_form_container}></div>
    </Container>
  );
};
