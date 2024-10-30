import React, { FC, useState } from "react";
import cn from "classnames";
import styles from "./index.module.scss";
import { RangeSlider } from "@/components/ui/RangeSlider";
import { RangeType } from "@/components/ui/RangeSlider/types";
import { useWatch } from "react-hook-form";

type propsType = {
  textInformation?: boolean;
  amount?: number;
  term?: number;
  amountForTextInformation?: number;
  amountError?: boolean;
  conditionForLockRangeAmount?: boolean;
  conditionForLockRangeLoanTerms?: boolean;
  period?: boolean;
  variant?: "amount" | "term";
  title?: string;
  name: string;
  containerClass?: string;
  hasInput?: boolean;
  disabled?: boolean;
  onChange?: () => void;
  getSchedule?: () => any;
  loading?: boolean;
  startHeader?: string;
  onValueChange?: (value: number) => void;
  endHeader?: string;
} & Omit<RangeType, "values" | "setValues">;

export const RangeWithInput: FC<propsType> = ({
  amountForTextInformation,
  textInformation,
  amount,
  term,
  startHeader,
  endHeader,
  amountError,
  conditionForLockRangeAmount,
  conditionForLockRangeLoanTerms,
  variant = "amount",
  title,
  name,
  onValueChange,
  containerClass,
  hasInput = true,
  ...rangeProps
}) => {
  const [value, setValue] = useState(rangeProps.min || 0);
  const [inputValue, setInputValue] = useState(value.toString());

  const handleSliderChange = (values: number[]) => {
    setValue(values[0]);
    setInputValue(values[0].toString());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    const numericValue = Number(newValue);

    if (
      newValue !== null &&
      numericValue >= (rangeProps.min || 0) &&
      numericValue <= (rangeProps.max || 0)
    ) {
      setValue(numericValue);
    }
  };

  return (
    <div
      className={cn(styles.container, {
        [`${containerClass}`]: containerClass,
      })}
    >
      <div className={styles.range_container}>
        <div className={styles.range_legend}>
          <p>{startHeader}</p>
          <p>{endHeader}</p>
        </div>
        <RangeSlider
          amountForTextInformation={amountForTextInformation}
          textInformation={textInformation}
          amount={amount}
          conditionForLockRangeAmount={conditionForLockRangeAmount}
          conditionForLockRangeLoanTerms={conditionForLockRangeLoanTerms}
          {...rangeProps}
          className={styles.range}
          name={name}
          values={[value]}
          setValues={handleSliderChange}
        />
      </div>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          className={styles.input}
          step={10000}
        />
      </div>
    </div>
  );
};
