"use client";

import React, { useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";

interface Props {
  initialRating: number;
  totalStars: number;
  readOnly?: boolean;
  width: number;
  height: number;
}

export const StarRating: React.FC<Props> = ({
  initialRating,
  totalStars,
  readOnly,
  width,
  height,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[...Array(totalStars)].map((star, index) => {
        const currentRating = index + 1;

        return (
          <button
            key={index}
            type="button"
            onClick={() => setRating(currentRating)}
            className={currentRating <= (hover || rating) ? "on" : "off"}
            onMouseEnter={() => setHover(currentRating)}
            onMouseLeave={() => setHover(0)}
            disabled={readOnly}
          >
            {currentRating <= (hover || rating) ? (
              <Image
                src={"/assets/icons/ui/star_rating.svg"}
                alt={"star"}
                loading={"lazy"}
                className={styles.star_image}
                width={width}
                height={height}
              />
            ) : (
              <Image
                src={"/assets/icons/ui/star_rating_gray.svg"}
                alt={"star_gray"}
                className={styles.star_image}
                width={width}
                height={height}
                priority
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
