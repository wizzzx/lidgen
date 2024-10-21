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
  className?: string
}

const GuaranteeData: AccordionBlockProps[] = [
  {
    id: '1',
    title: "Комфорт",
    content: "МигКредит - один из лидеров среди крупнейших микрофинансовых организаций в России и ежедневно помогает миллионам заемщиков по всей стране. Вы можете моментально оформить срочную заявку на займ онлайн на карту или наличными - за 5 минут. Подать заявку можно через мобильное приложение или официальный сайт компании.",
  },
  {
    id: '2',
    title: "Гарантия",
    content: "МигКредит - один из лидеров среди крупнейших микрофинансовых организаций в России и ежедневно помогает миллионам заемщиков по всей стране. Вы можете моментально оформить срочную заявку на займ онлайн на карту или наличными - за 5 минут. Подать заявку можно через мобильное приложение или официальный сайт компании.",
  },
  {
    id: '3',
    title: "Безопасность",
    content: "МигКредит - один из лидеров среди крупнейших микрофинансовых организаций в России и ежедневно помогает миллионам заемщиков по всей стране. Вы можете моментально оформить срочную заявку на займ онлайн на карту или наличными - за 5 минут. Подать заявку можно через мобильное приложение или официальный сайт компании.",
  },
  {
    id: '4',
    title: "Первый займ без процентов",
    content: "МигКредит - один из лидеров среди крупнейших микрофинансовых организаций в России и ежедневно помогает миллионам заемщиков по всей стране. Вы можете моментально оформить срочную заявку на займ онлайн на карту или наличными - за 5 минут. Подать заявку можно через мобильное приложение или официальный сайт компании.",
  },
  {
    id: '5',
    title: "Ремонт будок прицепов",
    content: "МигКредит - один из лидеров среди крупнейших микрофинансовых организаций в России и ежедневно помогает миллионам заемщиков по всей стране. Вы можете моментально оформить срочную заявку на займ онлайн на карту или наличными - за 5 минут. Подать заявку можно через мобильное приложение или официальный сайт компании.",
  },
];

const AccordionItem: React.FC<AccordionBlockProps & { isOpen: boolean, toggleAccordion: () => void }> = ({ className, title, content, isOpen, toggleAccordion }) => {

  return (
    <div className={cn(styles.accordion_item, className)}>
      <div className={cn(styles.accordion_item_title, className, {[styles.accordion_item_title_open] : isOpen})} onClick={toggleAccordion}>
        <h3>{title}</h3>
        {/* <span>{isOpen ? '-' : '+'}</span> */}
        
      </div>
      {isOpen && <div className={cn(styles.accordion_item_content, className, {[styles.accordion_item_content_open] : isOpen})}>{content}</div>}
    </div>
  );
};


export const AccordionBlock: React.FC<Props> = ({ className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn(styles.accordion, className)}>
      {GuaranteeData.map((item, index) => (
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