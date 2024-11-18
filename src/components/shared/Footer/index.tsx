"use client";

import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { Container } from "@/components/shared/Container";
import Link from "next/link";

const FooterNavigationData = [
  {
    title: "Продукты и условия",
    route: "/products",
  },
  {
    title: "Оферта",
    route: "/oferta",
  },
  {
    title: "О сервисе",
    route: "/about",
  },
  {
    title: "Команды",
    route: "/team",
  },
  {
    title: "Техническая документация",
    route: "/technical_documentation",
  },
  {
    title: "FAQ",
    route: "/faq",
  },
  {
    title: "Безопасность",
    route: "/security",
  },
  {
    title: "Подключение",
    route: "/connection",
  },
];

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn(styles.container, className)}>
      <div className={cn("hidden-mobile", styles.wrapper)}>
        <div className={styles.footer_subcontainer_left}>
          <div className={styles.service}>
            @ Сервис &laquo;Лидогенератор&raquo;, 2022
          </div>
          <div className={styles.telephone}>
            Остались вопросы? Звоните:{" "}
            <span className={styles.telephone_number}>8 800 600 1776</span>
          </div>
          <Link
            href={"/confidentiality_policy"}
            className={styles.confidentiality_policy}
          >
            Политика конфиденциальности
          </Link>
        </div>
        <div className={styles.footer_subcontainer_right}>
          <div className={styles.menu}>Меню</div>
          <nav className={styles.menu_items}>
            {FooterNavigationData.map((item, index) => (
              <div key={index} className={styles.menu_item}>
                <Link href={item.route}>{item.title}</Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
      <div className={cn("visible-mobile", styles.wrapper)}>
        <div className={styles.footer_subcontainer_right}>
          <div className={styles.menu}>Меню</div>
          <nav className={styles.menu_items}>
            {FooterNavigationData.map((item, index) => (
              <div key={index} className={styles.menu_item}>
                <Link href={item.route}>{item.title}</Link>
              </div>
            ))}
          </nav>
        </div>
        <div className={styles.footer_subcontainer_left}>
          <div className={styles.service}>
            @ Сервис &laquo;Лидогенератор&raquo;, 2022
          </div>
          <div className={styles.telephone}>
            Остались вопросы? Звоните:{" "}
            <span className={styles.telephone_number}>8 800 600 1776</span>
          </div>
          <Link
            href={"/confidentiality_policy"}
            className={styles.confidentiality_policy}
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </Container>
  );
};
