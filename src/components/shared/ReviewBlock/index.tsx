"use client";

import React from "react";
import styles from "./index.module.scss";
import { Container } from "@/components/shared/Container";
import Image from "next/image";
import Link from "next/link";
import { ReviewForm } from "@/components/shared/ReviewForm";
import { StarRating } from "@/components/ui/StarRating";

const ReviewData = [
  {
    id: 1,
    title: "Константин Душный",
    text: "Очень довольна условиями предоставления займов и обслуживанием. Сотрудники вежливы и внимательны. Всегда есть различные бонусы и акции. Есть возможность совершать все операции через мобильное приложение...Ещё",
    date: "02.08.2023",
  },
  {
    id: 2,
    title: "Константин Душный",
    text: "Все быстро. Вежливо. Удобно.",
    date: "02.08.2023",
  },
  {
    id: 3,
    title: "Константин Душный",
    text: "Все быстро. Вежливо. Удобно.",
    date: "02.08.2023",
  },
  {
    id: 4,
    title: "Николай А.",
    text: "Все быстро. Вежливо. Удобно.",
    date: "02.08.2023",
  },
  {
    id: 5,
    title: "Ангелина",
    text: "Отличные специалисты, много акций! Быстрое оформление без кучи документов. Рекомендую",
    date: "02.08.2023",
  },
];

export const ReviewBlock: React.FC = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.review_container}>
        <div className={styles.review_subcontainer}>
          <h3 className={styles.section_header}>Отзывы наших клиентов</h3>
          <p className={styles.section_subheader}>
            Поделитесь своим мнением о сервисе
          </p>
        </div>
        <div className={styles.review_cards_container}>
          {ReviewData.map((item) => (
            <div key={item.id} className={styles.review_card}>
              <div className={styles.review_card_container}>
                <h4 className={styles.name}>{item.title}</h4>
                <div className={styles.date_stars_container}>
                  <time>{item.date}</time>
                  <StarRating
                    initialRating={4}
                    totalStars={5}
                    width={14}
                    height={14}
                    readOnly={true}
                  />
                </div>
              </div>
              <p className={styles.review_text}>{item.text}</p>
            </div>
          ))}
          <div className={styles.review_link_container}>
            <Image
              src={"/assets/icons/ui/review_arrow.svg"}
              alt={"arrow"}
              width={20}
              height={10}
              className={styles.arrow}
            />
            <Link href={"/reviews"} className={styles.link}>
              Читать все отзывы
            </Link>
          </div>
        </div>
      </div>
      <ReviewForm className={styles.review_form_container} />
    </Container>
  );
};
