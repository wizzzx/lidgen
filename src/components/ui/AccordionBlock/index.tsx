"use client";

import React, { useState } from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import Image from "next/image";

interface AccordionBlockProps {
  className?: string;
  id?: string;
  title: string;
  content: string;
  isOpen?: boolean;
  toggleAccordion?: () => void;
}

interface Props {
  className?: string;
  data: AccordionBlockProps[];
}

const AccordionItem: React.FC<AccordionBlockProps> = ({
  className,
  title,
  content,
  isOpen,
  toggleAccordion,
}) => {
  return (
    <div
      className={cn(
        className,
        {
          [styles.accordion_item_open]: isOpen,
        },
        {
          [styles.accordion_item]: !isOpen,
        },
      )}
      onClick={toggleAccordion}
    >
      <h3>{title}</h3>
      {!isOpen && (
        <Image
          src={"/assets/icons/ui/accordion_arrow.svg"}
          alt={"accordion arrow"}
          className={styles.arrow_icon}
          width={40}
          height={40}
        />
      )}
      {isOpen && (
        <div
          className={cn(className, {
            [styles.accordion_item_content_open]: isOpen,
          })}
        >
          <div>
            <p className={styles.content}>{content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export const AccordionBlock: React.FC<Props> = ({ className, data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn(styles.accordion_container, className)}>
      {data.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};
