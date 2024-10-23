"use client";

import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";

interface Props {
  className?: string;
}

export const ReviewForm: React.FC<Props> = ({ className }) => {
  return (
    <form className={cn(styles.container, className)}>
      <h4>Напишите ваш отзыв</h4>
      <div className={styles.stars_container}>
        <StarRating initialRating={0} totalStars={5} />
        <p className={styles.rating_text}>Оцените сервис</p>
      </div>

      <Button label={"Отправить отзыв"} />
    </form>
  );
};
