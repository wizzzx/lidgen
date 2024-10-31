"use client";

import React from "react";
import styles from "./index.module.scss";
import { Container } from "@/components/shared/Container";
import { Header } from "@/components/ui/Header";
import { BlockTitle } from "@/components/ui/BlockTitle";
import { SmartForm } from "@/components/hocs/SmartForm";
import { useForm } from "react-hook-form";
import { SliderBlock } from "@/components/shared/SliderBlock";

export const TitleBlock: React.FC = () => {
  const form = useForm({
    reValidateMode: "onSubmit",
  });

  return (
    <Container className={styles.container}>
      <div className={styles.ellipse}></div>
      <Header />
      <Container className={styles.slider_block_container}>
        <BlockTitle
          className={styles.title_main}
          title={"ЗАЙМ НА КАРТУ"}
          subtitle={
            <>
              онлайн в {""}
              <span className={styles.highlighted_word}>Екатеринбурге</span>
            </>
          }
        />
        <SmartForm submit={() => console.log} form={form}>
          <SliderBlock className={styles.slider_block} />
        </SmartForm>
        <div>
          <div className={styles.text_block}>
            <h3 className={styles.title}>Займ онлайн - ваш осознанный выбор</h3>
            <p className={styles.text}>
              Получить займ на карту онлайн достаточно легко. Важен выбор
              финансового партнёра, который поможет получить деньги быстро,
              бережно обращается с вашими персональными данными, даёт вам только
              проверенные порядочные микрофинансовые компании, имеющие стандарт
              качества и хорошую репутацию
            </p>
          </div>
        </div>
      </Container>
    </Container>
  );
};
