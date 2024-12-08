"use client";

import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { DropDownMenu } from "@/components/ui/DropDownMenu";
import cn from "classnames";
import { usePathname } from "next/navigation";

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
    title: "Категория 1",
    route: "/cat1",
  },
  {
    title: "Категория 2",
    route: "/cat2",
  },
  {
    title: "Категория 3",
    route: "/cat3",
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
    <header className={isHeaderBlue ? styles.container_blue : styles.container}>
      <div className={styles.header}>
        <Link href="/" className={styles.logo_link}>
          <span className={styles.highlight_logo}>MFO</span> PLATFORM
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
