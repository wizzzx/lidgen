import * as React from "react";
import cn from "classnames";
import styles from "./index.module.scss";
import { Container } from "@/components/shared/Container";
import SmsCodeInput from "@/components/ui/SmsCodeInput";
import { Button } from "@/components/ui/Button";
import { CheckBox } from "@/components/ui/CheckBox";

interface Props {
  className?: string;
}

export const RegStep2: React.FC<Props> = ({ className }) => {
  const handleCodeSubmit = (data: any) => {
    console.log(data);
  };

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
        <div className={styles.code_container}>
          <SmsCodeInput callback={handleCodeSubmit} />
          <p className={styles.input_text}>
            Запросить код еще раз через{" "}
            <span className={styles.bold}>01:00</span>
          </p>
        </div>
        <Button
          label={"Продолжить"}
          redirect={"/signup/step3"}
          className={styles.button}
        />
        <div className={styles.checkboxes_container}>
          <CheckBox
            span={"Согласен на обработку"}
            label={"персональных данных"}
          />
          <CheckBox
            label={"Соглашаюсь с правилами аналога собственноручной подписи"}
          />
        </div>
      </div>
    </Container>
  );
};
