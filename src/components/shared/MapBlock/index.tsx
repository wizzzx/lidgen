"use client";

import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import dynamic from "next/dynamic";
import { Container } from "@/components/shared/Container";

interface Props {
  className?: string;
}

const YandexMap = dynamic(() => import("@/components/ui/YandexMap"), {
  ssr: false,
});

const AddressData = [
  {
    id: 1,
    title: "Доп. офис 111 |",
    content:
      "8 800 000-00-00 470964, Костромская область, город Волоколамск, пер. Гагарина, 44",
  },
  {
    id: 2,
    title: "Доп. офис 222 |",
    content:
      "8 800 000-00-00 607317, Тульская область, город Мытищи, спуск Космонавтов, 89",
  },
  {
    id: 3,
    title: "Доп. офис 333 | ",
    content:
      "8 800 000-00-00 607317, Тульская область, город Мытищи, спуск Космонавтов, 89",
  },
  {
    id: 4,
    title: "Доп. офис 444 | ",
    content:
      "8 800 000-00-00 470964, Костромская область, город Волоколамск, пер. Гагарина, 44",
  },
  {
    id: 5,
    title: "Доп. офис 555 | ",
    content:
      "8 800 000-00-00 607317, Тульская область, город Мытищи, спуск Космонавтов, 89",
  },
  {
    id: 6,
    title: "Доп. офис 666 | ",
    content:
      "8 800 000-00-00 607317, Тульская область, город Мытищи, спуск Космонавтов, 89",
  },
];

export const MapBlock: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn(styles.container, className)}>
      <header className={styles.section_header}>Отделения и филиалы</header>
      <YandexMap className={styles.map} />
      <div className={styles.address_container}>
        {AddressData.map((item) => (
          <div className={styles.address_item} key={item.id}>
            <p className={styles.item_title}>
              {item.title}
              <span className={styles.item_content}>&nbsp;{item.content}</span>
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};
