"use client";

import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { Container } from "@/components/shared/Container";
import { useForm } from "react-hook-form";
import { SmartForm } from "@/components/hocs/SmartForm";
import { SliderBlock } from "@/components/shared/SliderBlock";

interface Props {
  className?: string;
}

export const TitleBlockNewVariant: React.FC<Props> = ({ className }) => {
  const form = useForm({
    reValidateMode: "onSubmit",
  });

  return (
    <Container className={cn(styles.container, className)}>
      <ol className={styles.list_container}>
        <li className={styles.list_item}>99 % одобрения</li>
        <li className={styles.list_item}>Решение за 1 минуту</li>
        <li className={styles.list_item}>Полностью онлайн</li>
        <li className={styles.list_item}>Безопасно</li>
      </ol>
      <SmartForm submit={() => console.log} form={form}>
        <SliderBlock />
      </SmartForm>
    </Container>
  );
};
