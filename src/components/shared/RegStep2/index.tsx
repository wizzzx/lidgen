import * as React from "react";
import cn from "classnames";
import styles from "./index.module.scss";
import { Container } from "@/components/shared/Container";

interface Props {
  className?: string;
}

export const RegStep2: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn(styles.container, className)}>
      <header className={styles.header_container}>
        <h2 className={styles.section_header}>Подтверждение</h2>
        <p className={styles.subheader}>
          Введите код подтверждения, отправленный на номер:
        </p>
        <p className={styles.mock_phone_number}>+7 900 0000000</p>
      </header>
      <div className={styles.reg_wrapper}>
        {/*  number input + button*/}
        {/*    tick boxes small ui component*/}
      </div>
    </Container>
  );
};
