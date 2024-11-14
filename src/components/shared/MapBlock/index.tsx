"use client";

import React from "react";
import cn from "classnames";
import styles from "./index.module.scss";
import { Container } from "@/components/shared/Container";

interface Props {
  className?: string;
}

export const MapBlock: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn(styles.container, className)}>
      <div></div>
    </Container>
  );
};
