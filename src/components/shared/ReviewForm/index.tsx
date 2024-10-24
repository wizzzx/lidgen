"use client";

import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";

import { StarRating } from "@/components/ui/StarRating";
import { TextInput } from "@/components/ui/TextInput";

interface Props {
  className?: string;
}

export const ReviewForm: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.container, className)}>
      <h4 className={styles.section_header}>Напишите ваш отзыв</h4>
      <div className={styles.stars_container}>
        <StarRating initialRating={0} totalStars={5} />
        <p className={styles.rating_text}>Оцените сервис</p>
      </div>
      <TextInput placeholder={"Оцените сервис"} />
    </div>
  );
};
