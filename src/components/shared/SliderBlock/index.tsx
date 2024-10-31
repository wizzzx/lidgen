"use client";

import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { RangeWithInput } from "../../ui/RangeWithInput";
import { Button } from "@/components/ui/Button";
import { useFormContext, useWatch } from "react-hook-form";

interface Props {
  className?: string;
}

export const SliderBlock: React.FC<Props> = ({ className }) => {
  const { control } = useFormContext();

  const amount: number = useWatch({
    control,
    name: "loan_data.amount",
  });

  const term: number = useWatch({
    control,
    name: "loan_data.term",
  });

  const percent = 4;
  const amountPlusPercent = amount + (amount * percent) / 100;
  console.log(amount, term);
  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.slider_container}>
        <RangeWithInput
          amount={amount}
          variant={"amount"}
          name={"loan_data.amount"}
          step={10000}
          max={1000000}
          min={50000}
          startHeader={"50 тыс."}
          endHeader={"1 млн."}
        />
        <RangeWithInput
          name={"loan_data.term"}
          max={24}
          min={1}
          variant={"term"}
          step={1}
          rangeData={[1, 24]}
          term={term}
          startHeader={"1 месяц"}
          endHeader={"2 года"}
        />
      </div>
      <div className={styles.button_container}>
        <div className={styles.button_container_text}>
          <p>
            Вы берете <span className={styles.bold}>{amount} до 5 апреля </span>
            (включительно) 23:59{" "}
          </p>
          <div className={styles.dot}></div>
          <p>
            К возврату:{" "}
            <span className={styles.struck}>{amountPlusPercent}&#8381;</span>{" "}
            <span className={styles.payment_final}>{amount}&#8381;</span>
          </p>
        </div>
        <Button label={"Начать оформление"} className={styles.button} />
      </div>
    </div>
  );
};
