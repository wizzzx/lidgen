"use client";

import React from "react";
import styles from "./index.module.scss";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const RatingData = [
  {
    title: "Деньги сразу",
    subtitle: 'ООО МКК "Скороденьги"',
    platform1: "Banki.ru 5.0",
    platform2: "Otzovik 5.0",
  },
  {
    title: "Деньги сразу",
    subtitle: 'ООО МКК "Миг Финанс"',
    platform1: "Banki.ru 5.0",
    platform2: "Otzovik 5.0",
  },
  {
    title: "Деньги сразу",
    subtitle: 'ООО МКК "КешБек Налом"',
    platform1: "Banki.ru 5.0",
    platform2: "Otzovik 5.0",
  },
  {
    title: "Деньги сразу",
    subtitle: 'ООО МКК "Денюжки под ПТС"',
    platform1: "Banki.ru 5.0",
    platform2: "Otzovik 5.0",
  },
  {
    title: "Деньги сразу",
    subtitle: 'ООО МКК "Первая финансовая организация"',
    platform1: "Banki.ru 5.0",
    platform2: "Otzovik 5.0",
  },
];

export const RatingBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      {RatingData.map((item, index) => (
        <div key={index} className={styles.rating_container}>
          <div className={styles.naming_container}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.subtitle}>{item.subtitle}</div>
          </div>
          <div className={styles.button_container}>
            <div className={styles.platform1}>{item.platform1}</div>
            <div className={styles.platform2}>{item.platform2}</div>
            <Button
              label={"получить за 5 минут"}
              className={styles.rating_button}
            >
              <Image
                src={"/assets/icons/ui/clock.svg"}
                alt={"clock_icon"}
                width={48}
                height={48}
              />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
