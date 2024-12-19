"use client";

import React, { useRef } from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

interface Props {
  className?: string;
}

const LinkData = [
  {
    label: "Автокредит",
    route: "/autocredit",
  },
  {
    label: "Просто займ",
    route: "/prosto_zaym",
  },
  {
    label: "Займ под ПТС",
    route: "/pod_pts",
  },
  {
    label: "Без прописки",
    route: "/no_registration",
  },
  {
    label: "Займ на карту",
    route: "/zaym_na_kartu",
  },
  {
    label: "Ипотека",
    route: "/mortgage",
  },
  {
    label: "Займ",
    route: "/zaym",
  },
  {
    label: "Займ 2: возвращение займа",
    route: "/zaym2",
  },
  {
    label: "Займ 3: возвращение займа",
    route: "/zaym3",
  },
  {
    label: "Займ 4: возвращение займа",
    route: "/zaym4",
  },
  {
    label: "Займ 5: возвращение займа",
    route: "/zaym5",
  },
  {
    label: "Займ 6",
    route: "/zaym6",
  },
  {
    label: "Займ 7",
    route: "/zaym7",
  },
  {
    label: "Займ 8",
    route: "/zaym8",
  },
];

export const LinkSlider: React.FC<Props> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const trackRef = useRef<HTMLOListElement>(null);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(LinkData.length / itemsPerPage);

  const handleScroll = (direction: "prev" | "next") => {
    if (!trackRef.current) return;

    const newIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1;

    if (newIndex < 0 || newIndex >= totalPages) return;

    const itemWidth = trackRef.current.scrollWidth / LinkData.length;
    trackRef.current.style.transform = `translateX(-${newIndex * itemsPerPage * itemWidth}px)`;
    setCurrentIndex(newIndex);
  };

  return (
    <nav className={cn(styles.container, className)}>
      <ol className={styles.list} ref={trackRef}>
        {LinkData.map((item, index) => (
          <Link href={item.route} key={index}>
            <li className={styles.list_item}>{item.label}</li>
          </Link>
        ))}
      </ol>
      <div className={styles.sections_controls}>
        <button
          onClick={() => handleScroll("prev")}
          disabled={currentIndex === 0}
        >
          <Image
            src={"/assets/icons/ui/blue_arrow.svg"}
            alt={"arrow"}
            height={45}
            width={45}
            className={styles.arrow_icon}
          />
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <div
            key={i}
            className={cn(styles.sections_item, {
              [styles.active]: i === currentIndex,
            })}
          />
        ))}
        <button
          onClick={() => handleScroll("next")}
          disabled={currentIndex === totalPages - 1}
        >
          <Image
            src={"/assets/icons/ui/blue_arrow.svg"}
            alt={"arrow"}
            height={45}
            width={45}
          />
        </button>
      </div>
    </nav>
  );
};
