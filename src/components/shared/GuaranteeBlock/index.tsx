"use client";

import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { AccordionBlock } from "@/components/ui/AccordionBlock";
import cn from "classnames";

const GuaranteeData = [
  {
    id: "1",
    title: "Комфорт",
    content:
      "МигКредит - один из лидеров среди крупнейших микрофинансовых организаций в России и ежедневно помогает миллионам заемщиков по всей стране. Вы можете моментально оформить срочную заявку на займ онлайн на карту или наличными - за 5 минут. Подать заявку можно через мобильное приложение или официальный сайт компании.",
  },
  {
    id: "2",
    title: "Гарантия",
    content:
      "МигКредит - один из лидеров среди крупнейших микрофинансовых организаций в России и ежедневно помогает миллионам заемщиков по всей стране. Вы можете моментально оформить срочную заявку на займ онлайн на карту или наличными - за 5 минут. Подать заявку можно через мобильное приложение или официальный сайт компании.",
  },
  {
    id: "3",
    title: "Безопасность",
    content:
      "МигКредит - один из лидеров среди крупнейших микрофинансовых организаций в России и ежедневно помогает миллионам заемщиков по всей стране. Вы можете моментально оформить срочную заявку на займ онлайн на карту или наличными - за 5 минут. Подать заявку можно через мобильное приложение или официальный сайт компании.",
  },
  {
    id: "4",
    title: "Первый займ без процентов",
    content:
      "МигКредит - один из лидеров среди крупнейших микрофинансовых организаций в России и ежедневно помогает миллионам заемщиков по всей стране. Вы можете моментально оформить срочную заявку на займ онлайн на карту или наличными - за 5 минут. Подать заявку можно через мобильное приложение или официальный сайт компании.",
  },
  {
    id: "5",
    title: "Ремонт будок прицепов",
    content:
      "МигКредит - один из лидеров среди крупнейших микрофинансовых организаций в России и ежедневно помогает миллионам заемщиков по всей стране. Вы можете моментально оформить срочную заявку на займ онлайн на карту или наличными - за 5 минут. Подать заявку можно через мобильное приложение или официальный сайт компании.",
  },
];

export const GuaranteeBlock: React.FC = () => {
  return (
    <Container className={styles.container}>
      <h2 className={styles.section_header}>Займ на карту онлайн за 5 минут</h2>
      <div className={cn(styles.section_container, "hidden-mobile")}>
        <Image
          src={"/assets/images/hands.svg"}
          alt={"phone picture"}
          width={864}
          height={911}
          loading={"lazy"}
          className={styles.image}
        />
        <AccordionBlock
          data={GuaranteeData}
          className={styles.accordion_block}
        />
      </div>
      <div className={cn(styles.section_container, "visible-mobile")}>
        <AccordionBlock
          data={GuaranteeData}
          className={styles.accordion_block}
        />
        <Image
          src={"/assets/images/hands.svg"}
          alt={"phone picture"}
          width={864}
          height={911}
          loading={"lazy"}
          className={styles.image}
        />
      </div>
    </Container>
  );
};
