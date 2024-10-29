"use client";

import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { RangeWithTitleVariant } from "@/components/ui/RangeWithTitleVariant";

interface Props {
  className?: string;
  amount: number;
  term: number;
}

export const SliderBlock: React.FC<Props> = ({ className, amount, term }) => {
  return (
    <>
      <div className={cn(styles.container, className)}>
        <div className={styles.range_container}>
          <div className={styles.range_legend}>
            <p>50 тыс.</p>
            <p>1 млн.</p>
          </div>
          <RangeWithTitleVariant
            amount={amount}
            variant={"amount"}
            name={"loan_data.amount"}
            step={10000}
            max={1000000}
            min={50000}
            title={""}
          />
        </div>
        <div className={styles.range_container}>
          <div className={styles.range_legend}>
            <p>1 месяц</p>
            <p>2 года</p>
          </div>
          <RangeWithTitleVariant
            name={"loan_data.term"}
            max={24}
            min={1}
            variant={"term"}
            title={""}
            step={1}
            rangeData={[1, 24]}
            term={term}
          />
        </div>
      </div>
    </>
  );
};
