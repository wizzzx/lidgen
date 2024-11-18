import * as React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { Container } from "@/components/shared/Container";
import { PhoneNumberInput } from "@/components/ui/PhoneNumberInput";

interface Props {
  className?: string;
}

export const RegStep1: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn(styles.container, className)}>
      <header className={styles.header}>
        <h2 className={styles.section_header}>Регистрация</h2>
        <p className={styles.subheader}>Введите номер телефона</p>
      </header>
      <PhoneNumberInput className={styles.input_container} />
    </Container>
  );
};
