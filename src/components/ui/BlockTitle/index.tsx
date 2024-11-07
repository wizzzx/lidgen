"use client";

import React from "react";
import cn from "classnames";
import styles from "./index.module.scss";

interface Props {
  className?: string;
  title: string;
  subtitle?: React.ReactNode;
}

export const BlockTitle: React.FC<Props> = ({ title, subtitle, className }) => {
  return (
    <div className={cn(styles.container, className)}>
      <h2 className={styles.main_title}>{title}</h2>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
    </div>
  );
};
