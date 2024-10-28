"use client";

import * as React from "react";
import { Range } from "react-range";

const RangeSlider: React.FC = () => {
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
        step={1}
        min={0}
        max={100}
      />
    </div>
  );
};
