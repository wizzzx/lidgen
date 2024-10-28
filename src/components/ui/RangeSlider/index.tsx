"use client";

import * as React from "react";
import { Range } from "react-range";

interface Props {
  className?: string;
  min: number;
  max: number;
  step: number;
  amount?: number;
  name: string;
  defaultValue?: string;
  onChange?: () => void;
}

export const RangeSlider: React.FC<Props> = ({
  className,
  min,
  max,
  step,
  amount,
  name,
  defaultValue,
  onChange,
}) => {
  const [values, setValues] = React.useState([50]);

  return (
    <div>
      <Range
        values={values}
        onChange={(values) => setValues(values)}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "24px",
              width: "24px",
              backgroundColor: "#999",
            }}
          ></div>
        )}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "400px",
              backgroundColor: "#ccc",
            }}
          >
            {children}
          </div>
        )}
        step={step}
        min={min}
        max={max}
      />
    </div>
  );
};
