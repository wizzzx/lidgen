import React, { FC, useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { Range } from "react-range";
import cn from "classnames";
import styles from "./index.module.scss";
import { RangeType } from "./types";

export const RangeSlider: FC<RangeType> = ({
  amountForTextInformation,
  textInformation,
  amount,
  conditionForLockRangeAmount,
  conditionForLockRangeLoanTerms,
  marks,
  step = 1,
  min,
  max,
  rangeData,
  className,
  name,
  setValues,
  values,
  onChange,
  disabled,
  ...jsxAttrs
}) => {
  const { setValue, control } = useFormContext();

  const filledLine = ((values[0] - min) * 100) / (max - min);
  const unfilledLine = 100 - ((values[0] - min) * 100) / (max - min);

  const formValue = useWatch({
    control,
    name,
  });

  useEffect(() => {
    if (formValue && formValue !== values[0]) {
      formValue >= min && formValue <= max && setValues([formValue]);
    }
  }, [formValue]);

  return (
    <div
      className={cn(styles.container, {
        [`${className}`]: className,
        [styles.track_container_disabled]: disabled,
      })}
      {...jsxAttrs}
    >
      <Range
        values={values}
        step={step as number}
        min={min}
        max={max}
        onChange={(values) => {
          setValues(values);
          setValue(name, values[0]);
          onChange && onChange();
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
            }}
            className={styles.track_container}
          >
            <div ref={props.ref} className={styles.track_line_invisible}>
              {children}
              <div
                style={{
                  width: `${filledLine}%`,
                }}
                className={cn(styles.track_line_filled, {
                  [styles.track_line_disabled]: disabled,
                })}
              />
              <div
                style={{
                  width: `${unfilledLine}%`,
                }}
                className={styles.track_line_unfilled}
              />
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => {
          const { key, ...restProps } = props;

          return (
            <div
              key={key}
              {...restProps}
              style={{
                ...restProps.style,
                transform: "translate(-12px, -12px)",
              }}
              className={styles.thumb}
            >
              <div
                className={cn(styles.circle, {
                  [styles.circle_Dragged]: isDragged,
                })}
              >
                <div className={styles.circle_addition}></div>
              </div>
            </div>
          );
        }}
      />
      {!marks && <div className={styles.circle_end} />}
    </div>
  );
};
