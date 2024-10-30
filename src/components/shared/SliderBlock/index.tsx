"use client";

import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { RangeWithInput } from "../../ui/RangeWithInput";
import { Button } from "@/components/ui/Button";

interface Props {
  className?: string;
  amount: number;
  term: number;
}

export const SliderBlock: React.FC<Props> = ({ className, amount, term }) => {
  return (
    <>
      <div className={cn(styles.slider_container, className)}>
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
        <div>
          <p>Вы берете ... до ... (включительно) 23:59 </p>
          <p>К возврату: ... &#8381;</p>
        </div>
        <Button label={"Начать оформление"} className={styles.button} />
      </div>
    </>
  );
};
