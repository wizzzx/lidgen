"use client";

import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { DropDownMenu } from "../DropDownList";
import { usePathname } from "next/navigation";
import cn from "classnames";

interface Props {
  className?: string;
}

const navigationButtons = [
  {
    title: "Клиентам",
    route: "/clients",
  },
  {
    title: "Партнерам",
    route: "/partners",
  },
  {
    title: "Блог",
    route: "/blog",
  },
];

export const Header: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();
  const isHeaderBlue = pathname ? pathname.startsWith("/signup/") : false;

  return (
    <header
      className={cn(
        isHeaderBlue ? styles.container_blue : styles.container,
        className,
      )}
    >
      <div className={styles.header}>
        <Link href="/" className={styles.logo_link}>
          <div className={styles.logo}>
            <p className={styles.highlight_logo}>PLAT</p>
            <p>FORM</p>
          </div>
          <div className={styles.header_dot}></div>
          <div className={styles.logo_text}>
            маркетплейс микрофинансовых продуктов
          </div>
        </Link>
        <nav className={"hidden-tablets"}>
          <ul className={styles.nav_buttons}>
            {navigationButtons.map((button, index) => (
              <li key={index}>
                <Link href={button.route}>{button.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={"visible-tablets"}>
          <DropDownMenu data={navigationButtons} />
        </div>
      </div>
    </header>
  );
};
