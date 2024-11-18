"use client";

import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import Image from "next/image";

interface Props {
  className?: string;
  texts: string[];
}

const StepData = [
  {
    src: "/assets/icons/ui/1st_step.svg",
    alt: "1st step icon",
    width: 66,
    height: 66,
  },
  {
    src: "/assets/icons/ui/2nd_step.svg",
    alt: "2nd step icon",
    width: 66,
    height: 66,
  },
  {
    src: "/assets/icons/ui/3rd_step.svg",
    alt: "3rd step icon",
    width: 66,
    height: 66,
  },
];

export const StepList: React.FC<Props> = ({ className, texts = [] }) => {
  return (
    <div className={cn(styles.container, className)}>
      {StepData.map((item, index) => (
        <div key={index} className={styles.step_container}>
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className={styles.image}
          />
          {texts[index] && <p className={styles.step_text}>{texts[index]}</p>}
        </div>
      ))}
    </div>
  );
};
