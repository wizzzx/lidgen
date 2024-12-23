"use client";

import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { Container } from "@/components/shared/Container";
import Image from "next/image";

interface Props {
  className?: string;
}

export const MfoCard: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn(styles.container, className)}>
      <div className={styles.top_wrapper}>
        <div className={styles.top_part}>
          <div className={styles.header_container}>
            <h3 className={styles.header}>Деньги сразу</h3>
            <p className={styles.subheader}>ООО МКК "Скороденьги"</p>
          </div>
          <Image
            src={"/assets/icons/ip/mfo_logo_mock.svg"}
            alt={"logo"}
            width={35}
            height={35}
            className={styles.mfo_logo}
          />
        </div>
        <div className={styles.bottom_part}>
          <p className={styles.probability_text}>Вероятность одобрения</p>
          <div className={styles.probability_graph}>
            {/*    шкала*/}
            <span className={styles.text}>80%</span>
          </div>
        </div>
      </div>
      <div className={styles.bottom_wrapper}>
        <div className={styles.bottom_part_text}>
          <p>Полная стоимость кредита:</p>
          <span className={styles.bold}>14.8%-39.08%</span>
        </div>
        <div className={styles.bottom_part_text}>
          <p>Сумма:</p>
          <span className={styles.bold}>от 100 тыс до 1 млн</span>
        </div>
        <button type={"submit"} className={styles.button}>
          <p>Получить за 5 минут</p>
          <Image
            src={"/assets/icons/ui/clock.svg"}
            alt={"clock"}
            height={25}
            width={25}
            className={styles.clock_icon}
          />
        </button>
      </div>
    </Container>
  );
};
