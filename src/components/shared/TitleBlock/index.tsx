"use client";

import React from "react";
import styles from "./index.module.scss";
import { Container } from "@/components/shared/Container";
import { Header } from "@/components/ui/Header";
import { BlockTitle } from "@/components/ui/BlockTitle";
import { SmartForm } from "@/components/hocs/SmartForm";
import { RangeSlider } from "@/components/ui/RangeSlider";
import { useForm, useWatch } from "react-hook-form";
import { SliderBlock } from "@/components/shared/SliderBlock";

const textData = [
  {
    title: "Займ онлайн - ваш осознанный выбор",
    text: "Получить займ на карту онлайн достаточно легко. Важен выбор финансового партнера, который поможет получить деньги быстро, бережно обращается с вашими персональными данными, дает вам только проверенные порядочные микрофинансовые компании, имеющие стандарт качества и хорошую репутацию",
  },
];

export const TitleBlock: React.FC = () => {
  const form = useForm({
    reValidateMode: "onSubmit",
  });

  const amount: number = useWatch({
    control: form.control,
    name: "loan_data.amount",
  });

  const term: number = useWatch({
    control: form.control,
    name: "loan_data.term",
  });

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
        <SmartForm submit={() => console.log} form={form}>
          <SliderBlock amount={amount} term={term} />
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
