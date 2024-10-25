"use client";

import React from "react";
import styles from "./index.module.scss";
import { Container } from "@/components/shared/Container";
import { Header } from "@/components/ui/Header";
import { BlockTitle } from "@/components/ui/BlockTitle";
import { RangeWithTitleVariant } from "@/components/ui/RangeWithTitleVariant";
import { SmartForm } from "@/components/hocs/SmartForm";

const textData = [
  {
    title: "Займ онлайн - ваш осознанный выбор",
    text: "Получить займ на карту онлайн достаточно легко. Важен выбор финансового партнера, который поможет получить деньги быстро, бережно обращается с вашими персональными данными, дает вам только проверенные порядочные микрофинансовые компании, имеющие стандарт качества и хорошую репутацию",
  },
];

interface Props {
  amount: number;
}

export const TitleBlock: React.FC<Props> = ({ amount }) => {
  return (
    <Container className={styles.container}>
      <Header />
      <Container className={styles.slider_block_container}>
        <BlockTitle
          className={styles.title_main}
          title={"ЗАЙМ НА КАРТУ"}
          subtitle={
            <>
              онлайн в{" "}
              <span className={styles.highlighted_word}>Екатеринбурге</span>
            </>
          }
        />
        <SmartForm submit={} form={}>
          <RangeWithTitleVariant
            name={"loan_data.amount"}
            max={1000000}
            min={50000}
            step={10000}
            title={""}
            variant={"amount"}
            amount={amount}
          />
        </SmartForm>

        <div>
          {textData.map((item, index) => (
            <div key={index} className={styles.text_block}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
};
