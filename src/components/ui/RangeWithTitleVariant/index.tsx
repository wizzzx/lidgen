import React, { FC } from "react";
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
  variant = "round",
  title,
  name,
  label,
  containerClass,
  hasInput = true,
  ...rangeProps
}) => {
  const [values, setValues] = React.useState([rangeProps.min]);

  return (
    <div
      className={cn(styles.container, {
        [`${containerClass}`]: containerClass,
      })}
    >
      <div className={styles.title_wrapper}>
        <p className={styles.title}>{title}</p>

        {/*{variant === "amount" && (*/}
        {/*  <div className={styles.title_amount}>*/}
        {/*    {amount*/}
        {/*      ? stringHelpers.transformMoneyValue(amount)*/}
        {/*      : stringHelpers.transformMoneyValue(50_000)}*/}
        {/*  </div>*/}
        {/*)}*/}

        {/*{variant === "term" && (*/}
        {/*  <div className={styles.title_term}>*/}
        {/*    {term*/}
        {/*      ? stringHelpers.monthDeclination(term)*/}
        {/*      : stringHelpers.monthDeclination(1)}*/}
        {/*  </div>*/}
        {/*)}*/}
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
        values={values}
        setValues={setValues}
      />
    </div>
  );
};
