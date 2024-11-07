"use client";

import React from "react";
import styles from "./index.module.scss";
import { Container } from "@/components/shared/Container";
import { OtherOffersBlock } from "@/components/shared/OtherOffersBlock";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const ArticlesData = [
  {
    id: 1,
    title: "Как перестать экономить?",
    content:
      "Вы решили поужинать не дома, потому что сегодня не захотели готовить, или решили поехать на такси, потому что слишком устали для поездки в переполненном автобусе?",
    route: "/article1",
    routeSrc: "/assets/images/image1.png",
    alt: "placeholder",
  },
  {
    id: 2,
    title: "Удобно, что доходы храняться в одном месте",
    content:
      "Вы решили поужинать не дома, потому что сегодня не захотели готовить, или решили поехать на такси, потому что слишком устали для поездки в переполненном автобусе?",
    route: "/article2",
    routeSrc: "/assets/images/image2.png",
    alt: "placeholder",
  },
  {
    id: 3,
    title: "Как перестать экономить?",
    content:
      "Вы решили поужинать не дома, потому что сегодня не захотели готовить, или решили поехать на такси, потому что слишком устали для поездки в переполненном автобусе?",
    route: "/article3",
    routeSrc: "/assets/images/image3.png",
    alt: "placeholder",
  },
  {
    id: 4,
    title: "Как перестать экономить?",
    content:
      "Вы решили поужинать не дома, потому что сегодня не захотели готовить, или решили поехать на такси, потому что слишком устали для поездки в переполненном автобусе?",
    route: "/article4",
    routeSrc: "/assets/images/image4.png",
    alt: "placeholder",
  },
];

export const ArticlesBlock: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return !isMobile ? (
    <Container className={styles.container}>
      <div className={styles.ellipse}></div>
      <div className={styles.white_ellipse}></div>
      <div className={styles.articles_container}>
        {ArticlesData.map((item) => (
          <div key={item.id} className={styles.card_container}>
            <Image
              src={item.routeSrc}
              alt={item.alt}
              width={324}
              height={266}
              loading={"lazy"}
              className={styles.card_image}
            />
            <div className={styles.text_part}>
              <h4 className={styles.article_header}>{item.title}</h4>
              <p className={styles.article_content}>{item.content}</p>
            </div>
            <Link href={item.route} className={styles.link}>
              Читать статью
            </Link>
          </div>
        ))}
      </div>
      <OtherOffersBlock className={styles.other_offers} />
    </Container>
  ) : (
    <OtherOffersBlock className={styles.other_offers} />
  );
};
