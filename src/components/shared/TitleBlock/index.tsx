"use client";

import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Container } from "@/components/shared/Container";
import { BlockTitle } from "@/components/ui/BlockTitle";
import { SmartForm } from "@/components/hocs/SmartForm";
import { useForm } from "react-hook-form";
import { SliderBlock } from "@/components/shared/SliderBlock";
import { useRouter } from "next/router";

export const TitleBlock: React.FC = () => {
  const form = useForm({
    reValidateMode: "onSubmit",
  });

  const router = useRouter();
  const [queryParams, setQueryParams] = useState<{
    header?: string;
    mfo?: string;
  }>({});

  useEffect(() => {
    if (router.isReady) {
      setQueryParams(router.query as { header?: string; mfo?: string });
    }
  }, [router.isReady, router.query]);

  const getDynamicTitle = (
    headerKey: string | undefined,
    mfoName: string | undefined,
  ) => {
    const mfoTitle = mfoName || "вашей МФО";
    const titles: Record<string, string> = {
      header1: `Микрозайм Займ онлайн под 0% в день на срок до 30 дней в рублях в ${mfoTitle}`,
      header2: `Займ в ${mfoTitle} на карту от 0% — онлайн заявка на микрозайм в ${mfoTitle}`,
      header3: `Займы в ${mfoTitle}, взять займ онлайн на карту без отказов, оформить онлайн-заявку`,
      header4: `Займы в ${mfoTitle}: взять микрозайм на карту, онлайн заявка, условия и проценты`,
      header5: `Займ в ${mfoTitle} в 2024: условия, взять займ онлайн на карту`,
      header6: `Займы ${mfoTitle}: выгодные микрозаймы в 2024 году`,
      default: `Займы в ${mfoTitle}: стандартные условия`,
    };

    return titles[headerKey || "default"];
  };

  const { header, mfo } = queryParams;

  return (
    <Container className={styles.container}>
      <div className={styles.slider_block_container}>
        <BlockTitle
          className={styles.title_main}
          title={getDynamicTitle(header, mfo)}
          subtitle={
            <div className={styles.subtitle}>
              онлайн в {""}
              <span className={styles.highlighted_word}>
                {mfo || "вашем городе"}
              </span>
            </div>
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
              качества и хорошую репутацию.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
