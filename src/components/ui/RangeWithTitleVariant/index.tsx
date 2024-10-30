import React, { FC, useState } from "react";
import cn from "classnames";
import styles from "./index.module.scss";
import { RangeSlider } from "@/components/ui/RangeSlider";
import { RangeType } from "@/components/ui/RangeSlider/types";
import { stringHelpers } from "@/helpers/string";

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
} & Omit<RangeType, "values" | "setValues">;

export const RangeWithTitleVariant: FC<propsType> = ({
  amountForTextInformation,
  textInformation,
  amount,
  term,
  amountError,
  conditionForLockRangeAmount,
  conditionForLockRangeLoanTerms,
  variant = "amount",
  title,
  name,
  containerClass,
  hasInput = true,
  ...rangeProps
}) => {
  const [value, setValue] = useState(rangeProps.min || 0);
  const [inputValue, setInputValue] = useState(value.toString());

  const handleSliderChange = (values) => {
    setValue(values[0]);
    setInputValue(values[0].toString());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    const numericValue = Number(newValue);
    if (
      newValue !== "" &&
      !isNaN(numericValue) &&
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
      <div className={styles.range_with_input_container}>
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
