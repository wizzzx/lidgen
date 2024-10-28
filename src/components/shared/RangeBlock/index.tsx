import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { RangeWithTitleVariant } from "@/components/ui/RangeWithTitleVariant";
import { Button } from "@/components/ui/Button";

interface RangeBlockProps {
  className?: string;
  amount: number;
  term: number;
}

export const RangeBlock: React.FC<RangeBlockProps> = ({
  className,
  amount,
  term,
}) => {
  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.range_container}>
        <RangeWithTitleVariant
          amount={amount}
          variant={"amount"}
          title={""}
          step={10000}
          min={50000}
          max={1000000}
          name={"loan_data.amount"}
          textInformation={true}
        />
        <RangeWithTitleVariant
          term={term}
          variant={"amount"}
          title={""}
          step={1}
          rangeData={[3, 48]}
          max={48}
          min={3}
          name={"loan_data.terms"}
          textInformation={true}
        />
      </div>
      <Button label={"Начать оформление"} />
    </div>
  );
};
